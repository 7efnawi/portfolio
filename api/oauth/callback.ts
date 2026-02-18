export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const stateParam = url.searchParams.get('state');
  const clientId = (process.env.GITHUB_CLIENT_ID || '').trim();
  const clientSecret = (process.env.GITHUB_CLIENT_SECRET || '').trim();

  if (!code) return new Response('Missing OAuth code', { status: 400 });
  if (!clientId || !clientSecret) return new Response('Missing GitHub OAuth env vars', { status: 500 });

  // ── Validate state to prevent CSRF ──────────────────────────
  const cookies = Object.fromEntries(
    (req.headers.get('cookie') || '').split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  const storedState = cookies['oauth_state'];

  if (!stateParam || !storedState || stateParam !== storedState) {
    return new Response('Invalid OAuth state — possible CSRF attack', { status: 403 });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenRes.json();
    if (!tokenRes.ok || !data.access_token) {
      // Generic error — never leak GitHub's response payload
      return new Response('OAuth exchange failed', { status: 500 });
    }

    // Escape token for safe embedding in JS string literal
    const safeToken = data.access_token.replace(/[\\'"<>&]/g, '');

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8" /><title>OAuth Success</title></head>
<body>
<script>
  (function() {
    var payload = 'authorization:github:success:${JSON.stringify({ token: safeToken, provider: 'github' })}';

    if (window.opener) {
      // Restricted origin — never use '*'
      window.opener.postMessage(payload, window.location.origin);

      setTimeout(function() { window.close(); }, 1000);
    } else {
      document.body.innerHTML = '<h2>Authentication Successful!</h2><p>You may close this window.</p>';
    }
  })();
</script>
</body></html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        // Clear the state cookie after successful use
        'Set-Cookie': 'oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
      },
    });
  } catch (err: any) {
    // Never leak internal error details to the client
    return new Response('OAuth error: an internal error occurred', { status: 500 });
  }
}

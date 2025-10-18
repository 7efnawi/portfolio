export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const clientId = (process.env.GITHUB_CLIENT_ID || '').trim();
  const clientSecret = (process.env.GITHUB_CLIENT_SECRET || '').trim();

  if (!code) return new Response('Missing OAuth code', { status: 400 });
  if (!clientId || !clientSecret) return new Response('Missing GitHub OAuth env vars', { status: 500 });

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
      return new Response(`OAuth exchange failed: ${JSON.stringify(data)}`, { status: 500 });
    }

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8" /><title>OAuth Success</title></head>
<body>
<script>
  (function() {
    var payload = 'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}';
    
    // Try multiple methods to communicate with parent window
    if (window.opener) {
      // Method 1: postMessage
      window.opener.postMessage(payload, window.location.origin);
      window.opener.postMessage(payload, '*');
      
      // Method 2: Direct callback (for Decap CMS)
      if (window.opener.authCallback) {
        window.opener.authCallback(${JSON.stringify(data.access_token)});
      }
      
      // Close after a short delay to ensure message is received
      setTimeout(function() {
        window.close();
      }, 1000);
    } else {
      document.body.innerHTML = '<h2>Authentication Successful!</h2><p>Token received. You may close this window and return to the admin page.</p>';
    }
  })();
</script>
</body></html>`;

    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  } catch (err: any) {
    return new Response(`OAuth error: ${err?.message || String(err)}`, { status: 500 });
  }
}

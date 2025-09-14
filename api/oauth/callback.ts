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
    var payload = { token: ${JSON.stringify(data.access_token)}, provider: 'github' };
    if (window.opener) {
      window.opener.postMessage(payload, '*');
      window.close();
    } else {
      document.body.innerText = 'Token received. You may close this window.';
    }
  })();
</script>
</body></html>`;

    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  } catch (err: any) {
    return new Response(`OAuth error: ${err?.message || String(err)}`, { status: 500 });
  }
}

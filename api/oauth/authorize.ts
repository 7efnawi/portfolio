export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const origin = url.origin;
  const clientId = (process.env.GITHUB_CLIENT_ID || '').trim();
  const scope = 'public_repo,user:email';

  if (!clientId) {
    return new Response('Missing GITHUB_CLIENT_ID', { status: 500 });
  }

  // Generate a cryptographically random state token for CSRF protection
  const stateBytes = new Uint8Array(24);
  crypto.getRandomValues(stateBytes);
  const state = Array.from(stateBytes, (b) => b.toString(16).padStart(2, '0')).join('');

  const redirectUri = `${origin}/api/oauth/callback`;
  const gh = new URL('https://github.com/login/oauth/authorize');
  gh.searchParams.set('client_id', clientId);
  gh.searchParams.set('redirect_uri', redirectUri);
  gh.searchParams.set('scope', scope);
  gh.searchParams.set('state', state);

  // Store state in a secure, HttpOnly cookie and redirect
  return new Response(null, {
    status: 302,
    headers: {
      Location: gh.toString(),
      'Set-Cookie': `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}

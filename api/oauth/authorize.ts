export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const origin = url.origin;
  const clientId = (process.env.GITHUB_CLIENT_ID || '').trim();
  const scope = 'repo,user:email';

  if (!clientId) {
    return new Response('Missing GITHUB_CLIENT_ID', { status: 500 });
  }

  const redirectUri = `${origin}/api/oauth/callback`;
  const gh = new URL('https://github.com/login/oauth/authorize');
  gh.searchParams.set('client_id', clientId);
  gh.searchParams.set('redirect_uri', redirectUri);
  gh.searchParams.set('scope', scope);

  return Response.redirect(gh.toString(), 302);
}

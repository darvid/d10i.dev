import SpotifyWebApi from 'spotify-web-api-node';

const prod = process.env.NODE_ENV === 'production';
const domain = prod ? process.env.DOMAIN : 'http://localhost:3000';
const redirectUri = `${domain}/api/spotify/auth`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  redirectUri,
});

const refreshThreshold = 60;
var refreshExpiry;

function getRefreshTokenTtl() {
  if (refreshExpiry === undefined) {
    return -1;
  }
  return (refreshExpiry - Date.now()) / 1000;
}

async function refreshAccessToken() {
  if (getRefreshTokenTtl() >= refreshThreshold) {
    return {};
  }
  var refreshResp = await spotifyApi.refreshAccessToken();
  if (refreshResp.statusCode != 200) {
    return {};
  } else {
    spotifyApi.setAccessToken(refreshResp.body.access_token);
    refreshExpiry = new Date(Date.now() + 1000 * refreshResp.body.expires_in);
    return {
      accessToken: refreshResp.body.access_token,
      tokenType: refreshResp.body.token_type,
      expiresIn: refreshResp.body.expires_in,
      scope: refreshResp.body.scope,
    };
  }
}

export { redirectUri, refreshAccessToken };
export default spotifyApi;

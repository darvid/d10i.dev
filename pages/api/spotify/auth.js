// import SpotifyWebApi from 'spotify-web-api-node';

import spotifyApi, { redirectUri } from './index';

export default async (req, res) => {
  const prod = process.env.NODE_ENV === 'production';
  const domain = prod ? process.env.DOMAIN : 'http://localhost:3000';
  var scopes = [
      'user-read-private',
      'user-read-email',
      'user-top-read',
      'user-read-playback-position',
      'user-read-recently-played',
      'playlist-read-collaborative',
      'playlist-read-private',
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
    state = 'd10i_auth_initial';
  if ('error' in req.query) {
    const { error, state } = req.query;
    return res.status(400).json({
      error,
      state,
    });
  } else if ('code' in req.query) {
    const { code, state } = req.query;
    await spotifyApi.authorizationCodeGrant(code).then(
      (data) => {
        const {
          expires_in: expiresIn,
          access_token: accessToken,
          refresh_token: refreshToken,
        } = data.body;

        spotifyApi.setAccessToken(accessToken);
        spotifyApi.setRefreshToken(refreshToken);

        res.status(200).json({ expiresIn, accessToken, refreshToken });
      },
      (err) => {
        const { name, message, statusCode } = err;
        res.status(400).json({ name, message, statusCode });
      }
    );
    return res.end();
  } else {
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
    // return res.redirect({ path: authorizeURL });
    res.writeHead(302, { Location: authorizeURL });
    return res.end();
  }
};

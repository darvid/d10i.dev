import spotifyApi, { refreshAccessToken } from './index';

export async function getNowPlaying() {
  await refreshAccessToken();

  const npResp = await spotifyApi.getMyCurrentPlayingTrack();
  if (npResp.statusCode == 204 || npResp.statusCode > 400) {
    return { isPlaying: false };
  }

  const np = npResp.body.item;
  return {
    artist: np.artists.map((_artist) => _artist.name).join(', '),
    title: np.name,
    albumName: np.album.name,
    albumImageUrl: np.album.images[0],
    url: np.external_urls.spotify,
    isPlaying: npResp.body.is_playing,
  };
}

export default async (_, res) => {
  return res.status(200).json(await getNowPlaying());
};


// selectors
export const getSpotifyPlaylists = state => state.spotifyPlaylists;

// actions
const createActionName = actionName => `app/spotifyPlaylists/${actionName}`;
const UPDATE_SPOTIFY_PLAYLISTS = createActionName('UPDATE_SPOTIFY_PLAYLISTS');

// action creators
export const updateSpotifyPlaylists = payload => ({ type: UPDATE_SPOTIFY_PLAYLISTS, payload })

export const fetchPlaylists = (token, updateSpotifyPlaylistsState) => {
  return (dispatch) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/me/playlists?limit=50`, options)
      .then(res => res.json())
      .then(data => {
        dispatch(updateSpotifyPlaylists(data.items));
        updateSpotifyPlaylistsState(data.items);
        console.log(data.items);
      })
  }
};

// reducer
const spotifyPlaylistsReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_SPOTIFY_PLAYLISTS:
      return action.payload;
    default:
      return statePart;
  }
};

export default spotifyPlaylistsReducer;

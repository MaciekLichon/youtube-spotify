
// selectors
export const getSpotifyPlaylists = state => state.spotifyPlaylists;
export const getSpotifyPlaylistById = ({ spotifyPlaylists }, playlistId) => spotifyPlaylists.find(playlist => playlist.id === playlistId);

// actions
const createActionName = actionName => `app/spotifyPlaylists/${actionName}`;
const UPDATE_SPOTIFY_PLAYLISTS = createActionName('UPDATE_SPOTIFY_PLAYLISTS');

// action creators
export const updateSpotifyPlaylists = payload => ({ type: UPDATE_SPOTIFY_PLAYLISTS, payload })

export const fetchPlaylists = (token, updateSpotifyPlaylistsState, updatePopupStatus, updateErrorStatus ) => {
  return (dispatch) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/me/playlists?limit=50`, options)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              if (data.items.length > 0) {
                dispatch(updateSpotifyPlaylists(data.items));
                updateSpotifyPlaylistsState(data.items);
              }
              else {
                updatePopupStatus(true);
                updateErrorStatus('playlists');
              }
            });
        } else {
          updatePopupStatus(true);
          updateErrorStatus('response');
        }
      });
      // .then(res => res.json())
      // .then(data => {
      //   if (data.items.length > 0) {
      //     dispatch(updateSpotifyPlaylists(data.items));
      //     updateSpotifyPlaylistsState(data.items);
      //   }
      //   else if (data.items.length === 0) {
      //     updatePopupStatus(true);
      //     updateErrorStatus('playlists');
      //   }
      // })
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

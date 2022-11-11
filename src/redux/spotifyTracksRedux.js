
// selectors
export const getSpotifyTracks = state => state.youtube;

// actions
const createActionName = actionName => `app/spotifyTrack/${actionName}`;
const UPDATE_SPOTIFY_TRACKS = createActionName('UPDATE_SPOTIFY_TRACKS');

// action creators
export const updateSpotifyTracks = payload => ({ type: UPDATE_SPOTIFY_TRACKS, payload });

export const fetchSpotifyTracks = (token, phrase, updateSpotifyTracksState, updatePopupStatus, updateErrorStatus) => {
  return (dispatch) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/search?q=${phrase}&type=track&include_external=audio`, options)
      // .then(res => res.json())
      // .then(data => {
      //   dispatch(updateSpotifyTracks(data.tracks.items[0]));
      //   updateSpotifyTracksState(data.tracks.items[0]);
      // })
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              dispatch(updateSpotifyTracks(data.tracks.items[0]));
              updateSpotifyTracksState(data.tracks.items[0]);
            });
        } else {
          updatePopupStatus(true);
          updateErrorStatus('response');
        }
      })
      .catch(rejected => {
        updatePopupStatus(true);
        updateErrorStatus('track');
      });
  }
};

// reducer
const spotifyTracksReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_SPOTIFY_TRACKS:
      return action.payload;
    default:
      return statePart;
  }
};

export default spotifyTracksReducer;

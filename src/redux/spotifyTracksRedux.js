
// selectors
export const getSpotifyTracks = state => state.youtube;

// actions
const createActionName = actionName => `app/spotifyTrack/${actionName}`;
const UPDATE_SPOTIFY_TRACKS = createActionName('UPDATE_SPOTIFY_TRACKS');

// action creators
export const updateSpotifyTracks = payload => ({ type: UPDATE_SPOTIFY_TRACKS, payload });

export const fetchSpotifyTracks = (token, phrase, updateSpotifyTracksState) => {
  return (dispatch) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/search?q=${phrase}&type=track&include_external=audio`, options)
      .then(res => res.json())
      .then(data => {
        // const tracksData = data.tracks.items;
        // let tracks = [];
        // if (tracksData.length > 3) {
        //   tracks = tracksData.slice(0, 3);
        // } else {
        //   tracks = tracksData;
        // }
        // dispatch(updateSpotifyTracks(tracks));
        // updateSpotifyTracksState(tracks);
        dispatch(updateSpotifyTracks(data.tracks.items[0]));
        updateSpotifyTracksState(data.tracks.items[0]);
        // console.log(data.tracks.items[0]);
      })
  }
};

// reducer
const spotifyTracksReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_SPOTIFY_TRACKS:
      // return [...action.payload];
      return action.payload;
    default:
      return statePart;
  }
};

export default spotifyTracksReducer;

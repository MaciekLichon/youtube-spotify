
// selectors
export const getSpotifyToken = state => state.spotifyToken;

// actions
const createActionName = actionName => `app/spotifyToken/${actionName}`;
const UPDATE_SPOTIFY_TOKEN = createActionName('UPDATE_SPOTIFY_TOKEN');

// action creators
export const updateSpotifyToken = payload => ({ type: UPDATE_SPOTIFY_TOKEN, payload })

// reducer
const spotifyTokenReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SPOTIFY_TOKEN:
      return action.payload;
    default:
      return statePart;
  }
};

export default spotifyTokenReducer;

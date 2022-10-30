
// selectors
export const getSpotifyUser = state => state.spotifyUser;

// actions
const createActionName = actionName => `app/spotifyUser/${actionName}`;
const UPDATE_SPOTIFY_USER = createActionName('UPDATE_SPOTIFY_USER');

// action creators
export const updateSpotifyUser = payload => ({ type: UPDATE_SPOTIFY_USER, payload })

export const fetchUserData = (token, updateUserDataState) => {
  return (dispatch) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`https://api.spotify.com/v1/me`, options)
      .then(res => res.json())
      .then(data => {
        dispatch(updateSpotifyUser(data));
        updateUserDataState(data);
        console.log(data);
      })
  }
};

// reducer
const spotifyUserReducer = (statePart = {}, action) => {
  switch(action.type) {
    case UPDATE_SPOTIFY_USER:
      return action.payload;
    default:
      return statePart;
  }
};

export default spotifyUserReducer;

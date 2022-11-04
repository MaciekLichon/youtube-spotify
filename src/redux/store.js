import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

import youtubeReducer from './youtubeRedux';
import spotifyTokenReducer from './spotifyTokenRedux';
import spotifyUserReducer from './spotifyUserRedux';
import spotifyPlaylistsReducer from './spotifyPlaylistsRedux';
import currentTitleReducer from './currentTitleRedux';
import spotifyTracksReducer from './spotifyTracksRedux';


// reducer
const subreducers = {
  youtube: youtubeReducer,
  currentTitle: currentTitleReducer,
  spotifyToken: spotifyTokenReducer,
  spotifyUser: spotifyUserReducer,
  spotifyPlaylists: spotifyPlaylistsReducer,
  spotifyTracks: spotifyTracksReducer,
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,

  compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;

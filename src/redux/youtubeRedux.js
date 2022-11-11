const API_KEY = 'AIzaSyAcfRMBjScvswlEdOLfKeYqND4ttXgPQ1k';

// selectors
export const getAllVideos = state => state.youtube;

// actions
const createActionName = actionName => `app/youtube/${actionName}`;
const UPDATE_YOUTUBE = createActionName('UPDATE_YOUTUBE');

// action creators
export const updateYoutube = payload => ({ type: UPDATE_YOUTUBE, payload });

export const fetchByKeywords = (keywords, updateLoadingState, updatePopupStatus) => {

  updateLoadingState(true);

  return (dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${keywords}&type=video&part=snippet`)
      .then(res => res.json())
      .then(data => {
        if (data.items.length > 0) {
          const results = [];
          for (let item of data.items) {
            results.push(item);
            // console.log(item);
          }
          dispatch(updateYoutube(results));
          updateLoadingState(false);
          // console.log(data);
        }
        else {
          // console.log('wrong input, no data found');
          updateLoadingState(false);
          updatePopupStatus(true);
        }
      })
  }
};

export const fetchByVideoLink = (videoId, updateLoadingState, updatePopupStatus) => {

  updateLoadingState(true);

  return (dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${videoId}`)
      .then(res => res.json())
      .then(data => {
        if (data.items.length > 0) {
          // console.log([data.items[0]]);
          dispatch(updateYoutube([data.items[0]]));
          updateLoadingState(false);
        }
        else {
          // console.log('wrong input, no data found');
          updateLoadingState(false);
          updatePopupStatus(true);
        }
      })
  }
};

// reducer
const youtubeReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_YOUTUBE:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default youtubeReducer;

const API_KEY = 'AIzaSyAcfRMBjScvswlEdOLfKeYqND4ttXgPQ1k';

// selectors
export const getAllVideos = state => state.youtube;

// actions
const createActionName = actionName => `app/youtube/${actionName}`;
const UPDATE_YOUTUBE = createActionName('UPDATE_YOUTUBE');

// action creators
export const updateYoutube = payload => ({ type: UPDATE_YOUTUBE, payload });

export const fetchByKeywords = (keywords, updateVideoStateList) => {
  return (dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${keywords}&type=video&part=snippet`)
      .then(res => res.json())
      .then(data => {
        const results = [];
        for (let item of data.items) {
          results.push(item);
          console.log(item);
        }
        dispatch(updateYoutube(results));
        updateVideoStateList(results);
      })
  }
};

export const fetchByVideoLink = (videoId, updateVideoStateList) => {
  return (dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${videoId}`)
      .then(res => res.json())
      .then(data => {
        console.log([data.items[0]]);
        updateVideoStateList([data.items[0]]);
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

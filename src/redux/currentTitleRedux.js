
// selectors
export const getCurrentTitle = state => state.currentTitle;

// actions
const createActionName = actionName => `app/currentTitle/${actionName}`;
const UPDATE_CURRENT_TITLE = createActionName('UPDATE_CURRENT_TITLE');

// action creators
export const updateCurrentTitle = payload => ({ type: UPDATE_CURRENT_TITLE, payload })

// reducer
const currentTitleReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_CURRENT_TITLE:
      return action.payload;
    default:
      return statePart;
  }
};

export default currentTitleReducer;

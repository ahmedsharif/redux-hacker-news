// import { combineReducers } from 'redux';
// import storyReducer from './story';
// import archiveReducer from './archive';

// const rootReducer = combineReducers({
//     storyReducer: storyReducer,
//     archiveReducer: archiveReducer
// });

// export default rootReducer;
 
import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';

const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
});

export default rootReducer;
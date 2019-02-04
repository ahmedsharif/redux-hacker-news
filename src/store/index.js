import { createStore } from 'redux';
import rootReducer from '../reducers';
import storyReducer from '../reducers/story' 

const store = createStore(rootReducer);

export default store;

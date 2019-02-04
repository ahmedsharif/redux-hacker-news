import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { getReadableStories } from './selectors/story';
import { doArchiveStory } from './actions/archive';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    // <App 
    //     stories={getReadableStories(store.getState())}
    //     onArchive={id => store.dispatch( doArchiveStory(id) )}
    // />, document.getElementById('root'));
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

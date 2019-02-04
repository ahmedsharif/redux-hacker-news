import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStory } from './story';

function *watchall() {
    yield all ([
        takeEvery(STORIES_FETCH, handleFetchStory),
    ])
}

export default watchall;
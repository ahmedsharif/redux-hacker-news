import { STORIES_FETCH, STORIES_ADD } from '../constants/actionTypes';

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

export { doAddStories, doFetchStories };

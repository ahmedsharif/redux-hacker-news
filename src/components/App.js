import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';
import './App.css';

import Stories from './Stories';

const App = () => (
  <div className="app">
    {/* <div className="interactions">
      <SearchStories />
    </div> */}
    <Stories />
  </div>
);


const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);

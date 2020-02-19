import React from 'react';
import VideoList from './Components/VideoList/VideoList'
import Video from './Components/Video/Video'
import classes from './App.module.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={classes.App}>
        <Video />
        <VideoList />

      </div>
    );
  }
}

export default App;

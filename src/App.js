import React from 'react';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import classes from './App.module.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={classes.App}>
        <VideoPlayer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import VideoList from './Components/VideoList/VideoList'
import Video from './Components/Video/Video'
import classes from './App.module.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/:id" component={Video} />


          </Switch>
          <VideoList />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

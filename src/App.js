import React from 'react';
import VideoList from './Components/VideoList/VideoList'
import Video from './Components/Video/Video'
import classes from './App.module.css'
import Axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoCard: [],
      videoId: "",
      title: "",
      description: "",
      views: ""
    }
    this.handleVideoCardClick(1)
  }


  handleVideoCardClick = (id) => {
    Axios.get("https://5dfb78000301690014b8fbde.mockapi.io/video/" + id)
      .then((response) => {

        this.setState({

          videoId: response.data.vimeoId,
          title: response.data.title,
          description: response.data.description,
          views: response.data.views
        })

      })


  }
  render() {
    return (
      <div className={classes.mainContainer}>
        <h1 >Video Player</h1>

        <div className={classes.App}>

          <Video videoId={this.state.videoId} videoCard={this.state.videoCard} description={this.state.description} title={this.state.title} views={this.state.views} />



          <VideoList handleClick={this.handleVideoCardClick} />

        </div>
      </div>

    );
  }
}

export default App;

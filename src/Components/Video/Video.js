import React from 'react'
import Axios from 'axios'
import classes from './Video.module.css'

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoCard: []
        }
    }

    componentDidMount() {
        // const videoId = this.props.params.id
        Axios.get("https://5dfb78000301690014b8fbde.mockapi.io/video")
            .then((response) => {

                this.setState({
                    videoCard: [...response.data]
                })
            })
    }
    render() {

        const videoPlayer = { ...this.state.videoCard[0] }
        console.log(videoPlayer)
        return (
            <div className={classes.videoPlayer} key={videoPlayer.id}>


                <iframe src={"https://player.vimeo.com/video/" + videoPlayer.vimeoId} frameBorder="0"></iframe>
                <h1>{videoPlayer.title}</h1>
                <p>{videoPlayer.description}</p>
            </div >
        )


    }
}

export default Video;
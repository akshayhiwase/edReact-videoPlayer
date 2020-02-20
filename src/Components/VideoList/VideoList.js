import React from 'react'
import Axios from 'axios'
// import { Link } from 'react-router-dom'
import classes from './VideoList.module.css'
class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: []
        }
    }
    componentDidMount() {

        Axios.get("https://5dfb78000301690014b8fbde.mockapi.io/playlist")
            .then((response) => {

                this.setState({ videoList: [...response.data] })
            })
    }
    render() {
        const videoContainer = this.state.videoList.map((item) => {

            return <div className={classes.videoCards} key={item.id} onClick={() => { this.props.handleClick(item.id) }}>

                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>

            </div>

        })
        return (
            <div className={classes.videoList}>
                {videoContainer}

            </div>
        );
    }
}

export default VideoList;
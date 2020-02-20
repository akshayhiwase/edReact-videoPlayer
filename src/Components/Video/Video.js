import React from 'react'
import classes from './Video.module.css'

const video = (props) => {


    return (
        <div className={classes.videoPlayer} key={props.videoCard.id}>
            <iframe src={`https://player.vimeo.com/video/${props.videoId}`} frameBorder="0" title={props.videoCard.title} className={classes.iframe}></iframe>
            <h3>{props.views} Views</h3>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div >
    )



}

export default video;
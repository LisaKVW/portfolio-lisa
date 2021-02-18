import React from 'react'

import classes from './BackgroundVideo.module.css'

const BackgroundVideo = () => {
  const videoSource = "https://res.cloudinary.com/lisakvw/video/upload/v1612744195/portfolio-lisa/portfolio_video3_ym17cw.mp4"
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.video} >
        <source src={videoSource} type="video/mp4" />
      Apologies, your browser does not support the video tag.
    </video>

      <div className={classes.Content}>
        <div className={classes.Subcontent}>
          <h1> Lisa V. Wand </h1>
          <p style={{ fontSize: "18px" }}> Full Stack Web Developer | Software Engineer | Sales | Food Traveler </p>
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo
import React from 'react';

const VideoDetail = ({videodetail}) =>{
    if(!videodetail){
        return <div>Loading...</div>
    }
const videoId = videodetail.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;


return(
    <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" id="player" src={url}></iframe>
        </div>
        <div className="details">
            <div><h4>{videodetail.snippet.title}</h4></div>
        <div>{videodetail.snippet.description}</div>
        </div>
    </div>
);

}

export default VideoDetail;
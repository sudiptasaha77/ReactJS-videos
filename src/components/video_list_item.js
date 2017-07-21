import React from 'react'

const VideoListItem = ({vid, onVidSelect}) =>{
    const imageUrl = vid.snippet.thumbnails.default.url;
    return(
    <div onClick={()=>onVidSelect(vid)} className="group-item">
        <div className="video-list media">
            <div className="thumb">
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="desc">
                <div className="media-heading">{vid.snippet.title}</div>
            </div>
        </div>
    </div>
    );
};

export default VideoListItem;

import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=> {

    const videoItems = props.vd.map((vi) =>{
        return(
            <VideoListItem
                onVidSelect = {props.onVideoSelect}
                key={vi.etag}
                vid ={vi}/>
        )
    });

    return (
        <div id="item">
        
            <div id="eachItem">
                <div className="arrows">
                    <div className="arrow-left">
                      <i className="fa fa-chevron-left fa-lg"></i>
                   </div>
                        {videoItems}
                    <div className="arrow-right">
                        <i className="fa fa-chevron-right fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        
    );

};  

export default VideoList;
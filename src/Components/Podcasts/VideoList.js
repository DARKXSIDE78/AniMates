import React from "react";
import VideoItem from "./VideoItem";
import "./styles.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "center",
        margin: "0px",
        marginTop: "-2px",
      }}
      className='ui relaxed divided list'
      data-aos='flip-left'>
      {renderedList}
    </div>
  );
};

export default VideoList;

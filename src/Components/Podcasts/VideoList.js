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
        flexFlow: "column nowrap",
      }}
      className='ui relaxed divided list'
      data-aos='flip-left'>
      <a
        href='https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw'
        className='latest-button'>
        Podcasts
      </a>
      {renderedList}
    </div>
  );
};

export default VideoList;

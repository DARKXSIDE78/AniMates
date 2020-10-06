import React, { useState, useEffect } from "react";
import "./styles.css";
import youtube from "../../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export const Podcasts = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onTermSubmit("UC5JtyGZB8Ah4DHKX3Cth_Jw");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        channelId: term,
        order: "date", // catches term and fetches api
      },
    });
    setVideos(response.data.items.slice(1));
    setSelected(response && response.data.items[0]);
    setLoading(false);
  };

  const onVideoSelect = (video) => {
    setSelected(video);
  };

  return (
    <>
      {loading ? (
        <div className='loading-container'>
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='ui container'>
          <div className='ui stackable grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

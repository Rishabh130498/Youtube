import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
      {video.snippet.description}
    </div>
  );
};

export default VideoItem;

import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return "Loading...";
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui embed">
      <iframe src={videoSrc} />
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

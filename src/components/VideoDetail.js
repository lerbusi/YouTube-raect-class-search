import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="ui segment">
        <div class="ui active inline loader"></div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="VideoPlayer" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className=" description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

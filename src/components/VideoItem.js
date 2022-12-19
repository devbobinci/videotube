import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video.snippet);
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="rounded-lg"
      />
      <div className="px-2">
        <div className="text-md font-semibold">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

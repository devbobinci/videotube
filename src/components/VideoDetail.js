import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="w-full h-[450px]">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          title="video"
          src={videoSrc}
        />
      </div>
      <div>
        <h4 className="text-2xl py-2 font-medium">{video.snippet.title}</h4>
        <p className="italic">
          Published at {video.snippet.publishedAt.slice(0, -10)}
        </p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;



function VideoFrame() {
  return (
    <div className=" flex flex-col gap-4 bg-[#fff] rounded px-2 py-2 ">
      <h2>Video</h2>
      <div className="divide">
        <div className="divideBorder"></div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/ExJZAegsOis"
        className=" w-full h-[50vh] "
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoFrame;

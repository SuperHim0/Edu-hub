import { useLocation } from "react-router-dom";
import { getVideoByVideoId } from "../../Services/GetVideoService";
import { useEffect, useState } from "react";

interface VideoData {
  videoId: string;
  title: string;
  description: string;
  contentType: string;
  filePath: string;
  likes: any[];
  dislikes: any[];
}

const VideoPlayer = () => {
  const [allVideos, setAllVideos] = useState<VideoData[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const location = useLocation();
  const { videoIds, courseId, title } = location.state || {};

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoPromises = videoIds.map((id: string) => getVideoByVideoId(id));
        const results = await Promise.all(videoPromises);
        setAllVideos(results);
        setSelectedVideo(results[0]); // Play the first video by default
      } catch (err) {
        console.error("Failed to fetch videos:", err);
      }
    };

    if (videoIds && videoIds.length) {
      fetchVideoData();
    }
  }, [videoIds]);

  return (
    <div className="flex m-4 md:ml-70 xl:ml-90 xl:mr-20 mt-30 mb-5">
      {/* Sidebar */}
      <div className="flex flex-col lg:flex-row h-auto">
  {/* Sidebar */}
  <div className="w-full lg:w-1/4 shadow p-4 overflow-y-auto border border-gray-200">
    <h2 className="text-xl font-bold mb-4" key={courseId}>Course Title: {title}</h2>
    {allVideos.map((video) => (
      <div
        key={video.videoId}
        className={`p-3 mb-2 cursor-pointer rounded transition-colors duration-200 ${
          selectedVideo?.videoId === video.videoId
            ? "bg-green-300 text-white"
            : "hover:bg-green-100"
        }`}
        onClick={() => setSelectedVideo(video)}
      >
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.description}</p>
      </div>
    ))}
  </div>

  {/* Video Player */}
  <div className="flex-1 p-4 flex justify-center items-start">
    {selectedVideo ? (
      <div className="max-w-[800px] w-full">
        <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
        <p className="mb-4 text-gray-700">{selectedVideo.description}</p>
        <div className="w-full aspect-video bg-black rounded overflow-hidden">
          <video
            src={selectedVideo.filePath}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    ) : (
      <p className="text-center text-gray-500">Select a video from the list</p>
    )}
  </div>
</div>


      {allVideos.length == 0 && 
        <div> 
            No Video Found
        </div>}
    </div>
  );
};

export default VideoPlayer;

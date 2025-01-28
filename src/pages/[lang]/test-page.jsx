import TutoVid from "../../assets/videos/tuto.webm";
import StarRating from "../../components/StarRating";
import { useRef } from "react";

export default function TestPage() {
  const videoRef = useRef(null);

  const handleRating = (rating) => {
    console.log("User rated:", rating);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-50 overflow-x-hidden">
      <div className="w-full flex flex-col items-center gap-4 p-8">
        <h1 className="text-2xl font-bold">Victor Berbel aprende expressões</h1>

        {/* Video Player */}
        <div className="relative w-1/2">
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-lg"
            src={TutoVid}
            type="video/webm"
            controls
          ></video>
        </div>

        {/* Rating Section */}
        <div className="mt-8">
          <StarRating onRatingSubmit={handleRating} />
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";

const MediaWithCaption = ({
  src,
  alt,
  caption,
  className,
  captionClassName,
}) => {
  // Helper function to check if the src is a video file
  const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

  return (
    <div
      className={`max-w-[900px] flex flex-col items-center gap-2 ${className}`}
    >
      {isVideo(src) ? (
        <video
          src={src}
          className="rounded-md max-w-full"
          controls
          aria-label={alt}
          autoPlay
          loop
          muted // Muted ensures autoplay works across browsers
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={src} alt={alt} className="rounded-md max-w-full" />
      )}
      <p className={`text-center text-sm text-zinc-500 ${captionClassName}`}>
        {caption}
      </p>
    </div>
  );
};

MediaWithCaption.propTypes = {
  src: PropTypes.string.isRequired, // Path to the image or video
  alt: PropTypes.string.isRequired, // Alt text for accessibility
  caption: PropTypes.string.isRequired, // Caption for the media
  className: PropTypes.string, // Additional classes for the container
  captionClassName: PropTypes.string, // Additional classes for the caption
};

MediaWithCaption.defaultProps = {
  className: "",
  captionClassName: "",
};

export default MediaWithCaption;

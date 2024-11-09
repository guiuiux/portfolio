import PropTypes from "prop-types";
import clsx from "clsx"; // For conditional class names

export default function SocialLink({ src, alt, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group relative aspect-square sm:w-fit w-full h-full flex items-center justify-center border border-zinc-800 hover:bg-zinc-800 rounded-lg overflow-hidden transition-all duration-100 hover:border-zinc-800/0 ",
        // Apply dynamic Tailwind color class directly to the background
      )}
    >
      {/* Icon Image */}
      <img
        className="p-4 transition-all duration-100 opacity-75 group-hover:opacity-100 "
        src={src}
        alt={alt}
      />
    </a>
  );
}

SocialLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string, // Accept Tailwind color classes
};

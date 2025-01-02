import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PostCard({ post }) {
  return (
    <div className="w-full border border-[#FFD700] h-[400px] overflow-hidden rounded-lg">
      <Link to={`/blogpostpage/${post.slug}`}>
        <div className="w-full h-[260px]">
          <LazyLoadImage
            effect="blur"
            src={post.image}
            alt="post cover"
            className="h-[260px] w-[445px] object-cover"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between h-[140px]">
        {/* Post Title */}
        <h3 className="text-lg font-semibold text-[#FFD700] line-clamp-2">
          {post.title}
        </h3>

        {/* Read Article Button */}
        <Link
          to={`/blogpostpage/${post.slug}`}
          className="bg-black border border-[#FFD700] text-[#FFD700] text-center py-2.5 rounded-md flex items-center justify-center group hover:bg-[#FFD700] transition-all duration-300"
        >
          <span className="group-hover:text-black transition-colors duration-300">
            Read article
          </span>
          <FaCircleArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-black" />
        </Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

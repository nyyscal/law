import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  console.log(post.slug);

  return (
    <div className="group relative w-full border border-[#FFD700] hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/blogpostpage/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        {/* Post Title */}
        <p className="text-lg font-semibold text-[#FFD700] line-clamp-2">
          {post.title}
        </p>

        {/* Description truncated to 2 lines 
        <p
          className="text-sm text-gray-100 line-clamp-2 overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></p>*/}

        {/* Read Article Button */}
        <Link
          to={`/blogpostpage/${post.slug}`}
          className="z-10 absolute bottom-4 left-0 right-0 bg-black border border-[#FFD700] text-[#FFD700] hover:bg-black transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none mx-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired, // Slug for the post route
    image: PropTypes.string.isRequired, // Image URL for the post
    title: PropTypes.string.isRequired, // Title of the post
    content: PropTypes.string.isRequired, // Content of the post
  }).isRequired,
};

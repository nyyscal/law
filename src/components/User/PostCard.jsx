import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  console.log(post.slug);

  // Function to extract initial sentences (first two sentences)
  const getInitialSentences = (content) => {
    // Split the content into sentences
    const sentences = content.match(/[^.!?]+[.!?]+/g) || [];

    // Return first two sentences, or first sentence if only one exists
    return sentences.length > 1
      ? `${sentences[0]} ${sentences[1]}`
      : sentences[0] || "";
  };

  return (
    <div className="group relative w-full border border-[#FFD700] hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/blogpostpage/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2 text-[#FFD700]">
          {post.title}
        </p>

        {/* <p className="text-gray-700">
          {isExpanded 
            ? article.content 
            : getInitialSentences(article.content)}
        </p> */}

        <p
          className="p-3 max-w-2xl mx-auto w-full post-content text-gray-100"
          dangerouslySetInnerHTML={{
            __html: post && getInitialSentences(post.content),
          }}
        ></p>
        <Link
          to={`/blogpostpage/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-[#FFD700] text-[#FFD700]  hover:bg-teal-500  transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
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
    content: PropTypes.string.isRequired,
  }).isRequired,
};

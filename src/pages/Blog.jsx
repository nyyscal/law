import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/User/PostCard.jsx";
import axiosInstance from "../utils/axiosInstance";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Blog() {
  const [post, setPost] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6); // Track the number of visible posts

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get(`/api/post/getPosts`);
      const posts = res.data.posts;
      setPost(posts);
    };
    fetchPosts();
  }, []);

  // Load more posts when "View all posts" is clicked
  const handleViewAll = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Increment by 6 posts
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {post && post.length > 0 && (
          <div className="flex flex-col gap-6">
            {/* Recent Posts Heading */}
            <h2 className="text-3xl font-semibold text-center text-[#FFD700] mb-8">
              Recent Posts
            </h2>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {post.slice(0, visiblePosts).map((post) => (
                <PostCard
                  className="p-4 rounded-lg bg-white shadow-lg"
                  key={post._id}
                  post={post}
                />
              ))}
            </div>

            {/* View all posts link */}
            {visiblePosts < post.length && (
              <div className="text-center mt-6">
                <button
                  className="border border-white mt-3 -ml-3 flex items-center justify-center text-lg sm:text-xl text-white px-6 sm:px-8 py-3 sm:py-5 rounded-full group hover:scale-105 hover:transition-all hover:text-[#FFD700] hover:border-[#FFD700]"
                  onClick={handleViewAll}
                >
                  View More
                  <FaArrowCircleRight
                    size={16} // Smaller size for the icon on mobile
                    className="ml-2 sm:ml-3 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform duration-300"
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

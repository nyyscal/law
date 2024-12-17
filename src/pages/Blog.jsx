import { useEffect, useState } from "react";
import PostCard from "../components/User/PostCard.jsx";
import axiosInstance from "../utils/axiosInstance";
import { FaArrowCircleRight } from "react-icons/fa";
import Title from "../components/User/Title.jsx";

const Blog = () => {
  const [post, setPost] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6); // Show 6 posts initially (2 rows of 3)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get(`/api/post/getPosts`);
      const posts = res.data.posts;
      setPost(posts);
    };
    fetchPosts();
  }, []);

  const handleViewAll = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Load 6 more posts (2 rows)
  };

  return (
    <div className="min-h-screen py-4">
      <Title title="Recent Post" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-4">
        {post && post.length > 0 && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
              {post.slice(0, visiblePosts).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {/* View More Button */}
            {visiblePosts < post.length && (
              <div className="text-center mt-10">
                <button
                  className="border border-[#FFD700] flex items-center justify-center mx-auto text-lg text-[#FFD700] px-6 py-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all"
                  onClick={handleViewAll}
                >
                  View More
                  <FaArrowCircleRight size={16} className="ml-2" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

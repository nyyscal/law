import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/User/PostCard.jsx";
import axiosInstance from "../utils/axiosInstance";

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get(`api/post/getPosts`);
      const posts = res.data.posts;
      setPost(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        {post && post.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl mb-5 font-semibold text-center text-[#FFD700]">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {post.map((post) => (
                <PostCard
                  className="p-4 rounded-lg "
                  key={post._id}
                  post={post}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to={"/blog"}
                className="text-lg text-[#FFD700] hover:underline"
              >
                View all posts
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

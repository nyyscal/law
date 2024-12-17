import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

export default function BlogPostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(
          `api/post/getposts?slug=${postSlug}`
        );

        if (res.data.posts && res.data.posts.length > 0) {
          setPost(res.data.posts[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Fetch post error", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (postSlug) fetchPost();
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">
          Failed to load the blog post. Please try again later.
        </p>
      </div>
    );

  return (
    <main className="px-4 py-8 flex flex-col items-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center font-serif mb-6 lg:text-3xl text-[#FFD700] break-words sm:break-normal">
        {post?.title}
      </h1>
      <img
        src={post?.image}
        alt={post?.title}
        className="rounded-lg mb-6 w-full max-h-[500px] object-cover"
      />
      <div className="flex justify-between w-full border-b border-gray-300 pb-2 text-sm text-white mb-6">
        <span>
          {post && `${(post.content.length / 1000).toFixed(0)} mins read`}
        </span>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div
        className="prose prose-lg max-w-full text-white text-xl"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>
    </main>
  );
}

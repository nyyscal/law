import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

export default function BlogPostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  // const [recentPosts, setRecentPosts] = useState(null);

  console.log(postSlug);
  console.log('test')
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(
          `api/post/getposts?slug=${postSlug}`
        );

        if (res.data.posts && res.data.posts.length > 0) {
          setPost(res.data.posts[0]);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
        // const data = await res.json();
        // console.log(res.data);
        // if (!res.ok) {
        //   setError(true);
        //   setLoading(false);
        //   return;
        // }
        // if (res.ok) {
        //   setPost(res.posts[0]);
        //   setLoading(false);
        //   setError(false);
        // }
      } catch (error) {
        console.log("Fetch post error", error);
        setError(true);
        setLoading(false);
      }
    };
    if (postSlug) {
      fetchPost();
    }
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <main className="p-3 flex flex-col items-center justify-center max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[300px] flex items-center justify-center w-[300px] object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
    </main>
  );
}

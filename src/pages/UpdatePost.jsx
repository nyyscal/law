import { Alert, Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";

const UpdatePost = () => {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await axiosInstance.get(
          `api/post/getposts?postId=${postId}`
        );
        console.log(res);
        if (!res.statusText == "OK") {
          console.log(res.message);
          setPublishError(res.message);
          return;
        }

        setPublishError(null);

        console.log(res.data);
        setFormData(res.data.posts[0]);

        // console.log(res.data.posts);
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  // console.log(
  //   "formdata title:",
  //   formData.title,
  //   "formdata content:",
  //   formData.content
  // );

  // console.log(formData.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("test");
      const res = await axiosInstance.post(
        `/api/post/updatepost/${postId}`,
        {
          data: {
            title: formData.title,
            content: formData.content,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);
      if (!res.statusText == "OK") {
        setPublishError(res.message);
        return;
      }

      setFormData(res.data);
      setPublishError(null);
      navigate(`/blogpostpage/${res.data.slug}`);
    } catch (error) {
      setPublishError(error.message || "Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update a Post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
        </div>

        <ReactQuill
          theme="snow"
          className="h-72 mb-12 text-white"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
          value={formData.content}
        />

        <Button type="submit">Update Post</Button>

        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default UpdatePost;

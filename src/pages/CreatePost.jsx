import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../utils/axiosInstance";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSeletedFile] = useState();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const res = await axiosInstance.post(`api/post/createpost`, formData);

      // Check if the response status code is 201 for successful creation
      if (res.status === 201) {
        toast.success("Post created successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/dashboard?tab=posts");
        }, 3500);
      } else {
        toast.error("Failed to create post", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="p-3 min-h-screen mx-auto max-w-3xl">
      <ToastContainer />
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a New Post
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
        <div className="flex flex-col gap-2 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            onChange={(e) => {
              setSeletedFile(e.target.files[0]);
            }}
          />
        </div>

        <ReactQuill
          theme="snow"
          placeholder="Write something interesting..."
          className="h-72 text-white text-xl"
          required
          id="content"
          onChange={(value) => {
            setContent(value);
          }}
        />

        <Button type="submit" outline className="mt-12">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;

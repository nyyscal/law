import { Alert, Button, FileInput, TextInput, Label } from "flowbite-react";
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

      if (res.status === 201) {
        toast.success("Post created successfully!", {
          position: "top-right",
          autoClose: 1000,
        });

        setTimeout(() => {
          navigate("/admin-post");
        }, 2000);
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

  const handleBack = () => {
    navigate("/admin-post");
  };

  const handleClearFile = () => {
    setSeletedFile(null);
    document.getElementById("file-upload").value = "";
  };

  return (
    <div className="min-h-screen flex bg-black">
      <div className="flex-1 flex justify-center">
        <div className="max-w-3xl w-full p-4">
          <ToastContainer />
          <h1 className="text-center text-3xl my-7 font-semibold text-[#FFD700]">
            Create a New Post
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="text-white text-lg">
                Post Title:
              </Label>
              <TextInput
                type="text"
                placeholder="Enter post title"
                required
                id="title"
                className="flex-1"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="file-upload" className="text-white text-lg">
                Featured Image:
              </Label>
              <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput
                  id="file-upload"
                  type="file"
                  onChange={(e) => {
                    setSeletedFile(e.target.files[0]);
                  }}
                  className="w-full"
                />
                {selectedFile && (
                  <Button
                    type="button"
                    onClick={handleClearFile}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="content" className="text-white text-lg">
                Post Content:
              </Label>
              <ReactQuill
                theme="snow"
                placeholder="Write something interesting..."
                className="h-72 text-white mb-12"
                required
                id="content"
                onChange={(value) => {
                  setContent(value);
                }}
              />
            </div>

            <div className="flex flex-col gap-4 mt-12">
              <Button type="submit" className="bg-green-900">
                Publish
              </Button>
              <Button
                type="button"
                onClick={handleBack}
                className="bg-red-600 transition-colors duration-300 hover:bg-red-400"
              >
                Back to Dashboard
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

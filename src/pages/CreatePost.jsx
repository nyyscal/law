import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSeletedFile] = useState();

  const [publishError, setPublishError] = useState();

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(seletedFile);

    console.log("test");
    console.log(
      `title: ${title}, content: ${content}, selectedFile: ${selectedFile}`
    );

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    // Submit form data to your backend here.
    try {
      const res = await axiosInstance.post(`api/post/createpost`, formData);

      console.log(res);
      if (res.statusText === "Created") {
        alert("Post created successfully");
        // dispatch(signInSuccess(data));
        navigate("/");
      }
      // if (res.ok) {
      //   setPublishError(null);
      //   setFormData({});
      //   navigate(/posts/${data.slug});
      // Reset form data
      // }
    } catch (error) {
      setPublishError(error.message || "Something went wrong");
      // Reset form data
    }
  };

  return (
    <div className="p-3 min-h-screen mx-auto max-w-3xl">
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
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted  p-3 ">
          <FileInput
            type="file"
            // accept="image/*"
            onChange={(e) => {
              setSeletedFile(e.target.files[0]);
            }}
          />
          {/* <Button type="button" size="sm" outline>
            Upload
          </Button> */}
        </div>

        <ReactQuill
          theme="snow"
          placeholder="Write something interesting..."
          className="h-72"
          required
          id="content"
          onChange={(value) => {
            setContent(value);
          }}
        />

        <Button type="submit" outline className="mt-12">
          Publish
        </Button>
        {publishError && (
          <Alert className="mt-3" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};
export default CreatePost;

import {
  Button,
  TextInput,
  Label,
  Spinner,
  Modal,
  Table,
} from "flowbite-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(
          `/api/post/getposts?userId=${currentUser._id}`
        );
        if (res.status === 200) {
          setUserPosts(res.data.posts);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (currentUser?.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await axiosInstance.delete(
        `/api/post/deletepost/${postIdToDelete}`
      );
      if (res.status === 200) {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
        toast.success("Post deleted successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the post. Please try again.");
    }
  };

  return (
    <div className="w-full bg-black text-white p-5">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-5 fixed top-0 left-0 w-full bg-black z-10 p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-[#FFD700] text-center">
          Manage Posts
        </h1>
        {currentUser?.isAdmin && (
          <Link to="/createpost">
            <button
              type="button"
              className="bg-[#FFD700] hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg flex items-center"
            >
              <IoMdAddCircle size={24} className="mr-2" />
              Create a Post
            </button>
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="pt-20 px-4 sm:px-6">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Spinner color="yellow" size="xl" />
          </div>
        ) : userPosts.length > 0 ? (
          <div className="overflow-x-auto w-full bg-gray-800 rounded-lg shadow-lg mx-auto">
            <Table hoverable className="w-full text-white">
              <Table.Head>
                <Table.HeadCell className="text-xl">
                  Date Updated
                </Table.HeadCell>
                <Table.HeadCell className="text-xl">Post Image</Table.HeadCell>
                <Table.HeadCell className="text-xl">Post Title</Table.HeadCell>
                <Table.HeadCell className="text-xl">Category</Table.HeadCell>
                <Table.HeadCell className="text-xl">Actions</Table.HeadCell>
              </Table.Head>
              {userPosts.map((post) => (
                <Table.Body key={post._id}>
                  <Table.Row className="bg-gray-700">
                    <Table.Cell className="py-4 px-4 text-amber-400 text-lg">
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell className="py-4 px-4">
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-32 h-24 object-cover rounded-lg"
                        />
                      </Link>
                    </Table.Cell>
                    <Table.Cell className="py-4 px-4 text-lg">
                      <Link
                        to={`/post/${post.slug}`}
                        className="text-[#FFD700] text-xl"
                      >
                        {post.title}
                      </Link>
                    </Table.Cell>
                    <Table.Cell className="py-4 px-4 text-lg">
                      {post.category}
                    </Table.Cell>
                    <Table.Cell className="py-4 px-4 flex items-center space-x-6">
                      <FiTrash2
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        size={28}
                        onClick={() => {
                          setShowModal(true);
                          setPostIdToDelete(post._id);
                        }}
                      />
                      <Link to={`/update-post/${post._id}`}>
                        <FiEdit
                          className="text-teal-500 hover:text-teal-700 cursor-pointer"
                          size={28}
                        />
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
          </div>
        ) : (
          <p className="text-[#FFD700] mt-5 text-center">
            {currentUser?.isAdmin
              ? "You haven't published any posts yet."
              : "Admin access is required to view posts."}
          </p>
        )}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I&apos;m sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashPosts;

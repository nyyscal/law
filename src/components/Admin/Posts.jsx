import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { Button, Modal, Spinner, Table } from "flowbite-react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Posts = () => {
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

  // Mobile post card component
  const PostCard = ({ post }) => (
    <div className="bg-gray-700 rounded-lg p-4 mb-4">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-amber-400 text-sm">
            {new Date(post.updatedAt).toLocaleDateString()}
          </span>
          <div className="flex space-x-3">
            <FiTrash2
              className="text-red-500 hover:text-red-700 cursor-pointer"
              size={20}
              onClick={() => {
                setShowModal(true);
                setPostIdToDelete(post._id);
              }}
            />
            <Link to={`/update-post/${post._id}`}>
              <FiEdit
                className="text-teal-500 hover:text-teal-700 cursor-pointer"
                size={20}
              />
            </Link>
          </div>
        </div>
        <Link to={`/blogpostpage/${post.slug}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </Link>
        <Link to={`/post/${post.slug}`} className="text-[#FFD700] text-lg">
          {post.title}
        </Link>
        <span className="text-gray-300 text-sm">{post.category}</span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black text-white max-w-full overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex justify-between items-center py-2 px-4 ">
        <h1 className="text-xl sm:text-2xl font-bold text-[#FFD700]">
          Manage Posts
        </h1>
        {currentUser?.isAdmin && (
          <Link to="/create-post">
            <button className="bg-[#FFD700] hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full shadow-lg hidden sm:flex items-center">
              <IoMdAddCircle size={24} className="mr-2" />
              <span>Create a Post</span>
            </button>
          </Link>
        )}
      </div>

      <div className="p-10">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Spinner color="yellow" size="xl" />
          </div>
        ) : userPosts.length > 0 ? (
          <div>
            {/* Mobile View */}
            <div className="block md:hidden">
              {userPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
              <Table hoverable className="w-full text-white">
                <Table.Head>
                  <Table.HeadCell className="text-xl">
                    Date Updated
                  </Table.HeadCell>
                  <Table.HeadCell className="text-xl">
                    Post Image
                  </Table.HeadCell>
                  <Table.HeadCell className="text-xl">
                    Post Title
                  </Table.HeadCell>
                  <Table.HeadCell className="text-xl">Category</Table.HeadCell>
                  <Table.HeadCell className="text-xl">Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {userPosts.map((post) => (
                    <Table.Row
                      key={post._id}
                      className="bg-gray-700 hover:bg-gray-800"
                    >
                      <Table.Cell className="py-4 px-4 text-amber-400 text-lg">
                        {new Date(post.updatedAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell className="py-4 px-4">
                        <Link to={`/blogpostpage/${post.slug}`}>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-32 h-24 object-cover rounded-lg"
                          />
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="py-4 px-4 text-lg">
                        <Link
                          to={`/blogpostpage/${post.slug}`}
                          className="text-[#FFD700] text-xl"
                        >
                          {post.title}
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="py-4 px-4 text-lg">
                        {post.category}
                      </Table.Cell>
                      <Table.Cell className="py-10 px-4 flex items-center  space-x-6">
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
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        ) : (
          <p className="text-[#FFD700] mt-5 text-center">
            {currentUser?.isAdmin
              ? "You haven't published any posts yet."
              : "Admin access is required to view posts."}
          </p>
        )}
      </div>

      {/* Fixed Mobile Add Button */}
      {currentUser?.isAdmin && (
        <Link to="/create-post">
          <button className="sm:hidden fixed bottom-4 right-4 bg-[#FFD700] hover:bg-yellow-600 text-black font-semibold p-4 rounded-full shadow-lg flex items-center z-50">
            <IoMdAddCircle size={28} />
          </button>
        </Link>
      )}

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
                Yes, I'm sure
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

export default Posts;

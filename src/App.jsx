import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/User/Header.jsx";
import Footers from "./components/User/Footers.jsx";
import Login from "./pages/Login.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import OnlyAdminPrivateRoute from "./components/Admin/OnlyAdminPrivateRoute.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";

function App() {
  return (
    <div className="bg-black">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-portal" element={<Login />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/blogpostpage/:postSlug" element={<BlogPostPage />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;

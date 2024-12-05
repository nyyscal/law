import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact1";
import Header from "./components/Header";
import Footers from "./components/Footers";
import AdminSignin from "./pages/AdminSignin";
import CreatePost from "./pages/CreatePost";
import BlogPostPage from "./pages/BlogPostPage";
import Dashboard from "./pages/DashBoard";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminSignin />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/blogpostpage/:postSlug" element={<BlogPostPage />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;

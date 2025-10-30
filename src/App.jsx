import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayOut from "./Layout/MainLayOut";
import LaunchPad from "./pages/LaunchPad";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Transform from "./pages/Transform";
import CreateBlog from "./pages/CreateBlog";
import EditBlogPage from "./pages/EditBlogPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import useUserStore from "./store/useUserStore";
import { useEffect } from "react";
import AllUsers from "./Admin/AllUsers";
import AllBlogs from "./Admin/AllBlogs";
import Landing from "./pages/Landing";
import MindChamps from "./pages/MindChamps";
import ScrollToTop from "./utils/ScrollToTop";
import toast from "react-hot-toast";
import Loader from "./components/Loader";
import FinancialLanding from "./pages/FinancialLanding";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";

const AdminAndSuperAdminRoutes = ({ children }) => {
  const { user, isAuthenticated, isCheckingAuth } = useUserStore();

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "SUPERADMIN" && user?.role !== "ADMIN") {
    toast.error("Your are not authorised for this page");
    return <Navigate to="/" replace />;
  }
  return children;
};

const OnlySuperAdmin = ({ children }) => {
  const { isAuthenticated, user, isCheckingAuth } = useUserStore();
  if (isCheckingAuth) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "SUPERADMIN") {
    toast.error("You are not Authorised for this page");
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { checkAuthentication, isCheckingAuth } = useUserStore();

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/training-and-placements" element={<LaunchPad />} />
          <Route path="/transforms-local-digital-outreach" element={<Transform />} />
          <Route path="/mindChamps" element={<MindChamps />} />
          <Route path="/category/latest-blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/latest-blogs/:category/:slug" element={<BlogDetail />} />
          <Route path="/public-speaking" element={<Landing />} />
          <Route path="/financial-literacy" element={<FinancialLanding />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminAndSuperAdminRoutes>
              <AdminPage />
            </AdminAndSuperAdminRoutes>
          }
        >
          <Route path="editblog/:category/:slug" element={<EditBlogPage />} />
          <Route path="createBlog" element={<CreateBlog />} />
          <Route
            path="alluser"
            element={
              <OnlySuperAdmin>
                <AllUsers />
              </OnlySuperAdmin>
            }
          />
          <Route path="allblogs" element={<AllBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

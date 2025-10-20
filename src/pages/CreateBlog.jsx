import CategorySelect from "@/components/CategorySelect";
import { Button } from "@/components/ui/button";
import useBlogStore from "@/store/useBlogStore";
import { usePartnerUpload } from "@/store/usePartnerUploadStore";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "times-new-roman",
  "courier-new",
  "roboto",
  "serif",
  "sans-serif",
  "monospace",
];
Quill.register(Font, true);

// ✅ Custom Font Sizes
const Size = Quill.import("formats/size");
Size.whitelist = [
  "12px",
  "13px",
  "14px",
  "15px",
  "16px",
  "17px",
  "18px",
  "19px",
  "20px",
  "21px",
  "22px",
  "23px",
  "24px",
];
Quill.register(Size, true);

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: Size.whitelist }], // 👈 Custom sizes
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "align",
  "color",
  "background",
  "link",
  "image",
  "video",
];

export default function CreateBlog() {
  const { loading, createBlog, getAllCategories } =
    useBlogStore();
  const { loadingLogo, UploadPartnerLogo } = usePartnerUpload();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [previewCoverImage, setPreviewCoverImage] = useState("");
  const [previewPartnerLogo, setPreviewPartnerLogo] = useState("");
  const [partnerLogo, setPartnerLogo] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [partnerName, setPartnerName] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewCoverImage(URL.createObjectURL(file));
      setCoverImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("publishedDate", publishedDate);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    const result = await createBlog(formData);
    if (result?.success) {
      navigate("/admin/allblogs");
    }
  };

  async function handleLogoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPreviewPartnerLogo(URL.createObjectURL(file));
      setPartnerLogo(file);
    }
  }

  async function uploadingPartnerDetail(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("partnerName", partnerName);
    if (partnerLogo) {
      formdata.append("partnerLogo", partnerLogo);
    }
    await UploadPartnerLogo(formdata);
    setPartnerName("");
    setPartnerLogo(null);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="p-4 max-w-[1530px] mx-auto sm:p-6 lg:p-10 pt-[73px] lg:pt-[83px] bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Main Blog Form */}
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-2xl shadow">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            ✍️ Create New Blog
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Cover Image */}
            <div>
              <label className="block mb-2 font-semibold">Cover Image</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-[300px] border-2 border-solid border-gray-400 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300">
                  {coverImage ? (
                    <img
                      src={previewCoverImage}
                      alt="Preview"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-500">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            {/* Blog Title */}
            <input
              type="text"
              placeholder="Enter blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-400 p-3 rounded-lg font-medium placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Blog Category */}
            <CategorySelect category={category} setCategory={setCategory} />

            {/* Blog Tags */}
            <input
              type="text"
              placeholder="Enter tags (comma separated)..."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-400 p-3 rounded-lg font-medium placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Blog Content */}
            <div className="h-[300px] sm:h-[400px] md:h-[600px]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="h-full border border-gray-300 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            {loading ? (
              <button
                disabled
                // type="submit"
                className="flex bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 font-semibold transition duration-200 w-full sm:w-auto mt-[26px]"
              >
                <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                Please Wait 🚀
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 font-semibold transition duration-200 w-full sm:w-auto mt-[26px]"
              >
                🚀 Publish Blog
              </button>
            )}
          </form>
        </div>

        {/* Right Side - Sidebar Options */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow h-fit">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            ⚙️ Blog Options
          </h3>

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Published Date
          </label>
          <input
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            className="w-full border border-gray-400 p-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-5"
          />

          <div className="text-sm text-gray-500">
            Set category, tags, and publish date for your blog post.
          </div>

          {/* Uploading Logo for partner */}
          <form onSubmit={uploadingPartnerDetail}>
            <div className="mt-10">
              <label className="block mb-2 font-semibold">
                Upload Partner Logo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-[300px] border-2 border-solid border-gray-400 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300">
                  {partnerLogo ? (
                    <img
                      src={previewPartnerLogo}
                      alt="Preview"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-500">
                        Click to upload Logo
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="partnerLogo"
                    onChange={handleLogoChange}
                  />
                </label>
              </div>
              <input
                type="text"
                name="partnerName"
                placeholder="Enter Partner Name..."
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                className="mt-5 w-full border border-gray-400 p-3 rounded-lg font-medium placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="flex justify-center mt-7">
                {loadingLogo ? (
                  <Button
                    disabled
                    className="w-full bg-[#00274D] text-[17px] lg:text-2xl"
                  >
                    <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                    Please Wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="cursor-pointer w-full text-xl bg-[#00274D] transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4"
                  >
                    Upload Partner logo
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import CategorySelect from "@/components/CategorySelect";
import { Button } from "@/components/ui/button";
import useBlogStore from "@/store/useBlogStore";
import { Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

// ✅ Custom Fonts
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

// ✅ Custom Font Sizes (12px → 24px)
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
    [{ size: Size.whitelist }], // 👈 ab 12–24px dikhayega
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

export default function EditBlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const {
    getSingleVlogData,
    singleBlogData,
    editBlog,
    loading,
    getAllCategories,
  } = useBlogStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    getSingleVlogData(slug);
  }, [slug, getSingleVlogData]);

  useEffect(() => {
    if (singleBlogData) {
      setTitle(singleBlogData.title || "");
      setContent(singleBlogData.content || "");
      setCategory(singleBlogData.category || "");
      setTags(singleBlogData.tags?.join(", ") || "");
      setCoverImage(singleBlogData.coverImage || null);
      if (singleBlogData.publishedDate) {
        // Convert to yyyy-MM-dd
        const formattedDate = new Date(singleBlogData.publishedDate)
          .toISOString()
          .split("T")[0];
        setPublishedDate(formattedDate);
      }
    }
  }, [singleBlogData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setPreviewImage(URL.createObjectURL(file));
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
    const result = await editBlog(slug, formData);
    if (result.success) {
      navigate(`/admin/allblogs`);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-100 min-h-screen pt-[73px] lg:pt-[83px] max-w-[1530px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Edit Blog Form */}
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-2xl shadow">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            ✍️ Edit Blog
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Cover Image */}
            <div>
              <label className="block mb-2 font-semibold">Cover Image</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-[300px] border-2 border-solid border-gray-400 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300">
                  {coverImage ? (
                    <img
                      src={previewImage || coverImage}
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

            {/* <input
              type="text"
              placeholder="Enter category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-400 p-3 rounded-lg font-medium placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            /> */}

            {/* Blog Tags */}
            <input
              type="text"
              placeholder="Enter tags (comma separated)..."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-400 p-3 rounded-lg font-medium placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Blog Content */}
            <div className="editor-container h-[300px] sm:h-[400px] md:h-[600px] ">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="border border-gray-300 rounded-lg h-full"
              />
            </div>

            {/* Update Button */}

            {loading ? (
              <Button
                disabled
                type="submit"
                className="bg-green-600 text-[17px] cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 font-semibold transition duration-200 w-full sm:w-auto mt-[26px] lg:text-2xl"
              >
                <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                ⏳ Updating...
              </Button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 font-semibold transition duration-200 w-full sm:w-auto mt-[26px]"
              >
                💾 Update Blog
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
            Update category, tags, and publish date for your blog post.
          </div>
        </div>
      </div>
    </div>
  );
}

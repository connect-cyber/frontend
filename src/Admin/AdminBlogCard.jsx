import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import useBlogStore from "@/store/useBlogStore";

export default function AdminBlogCard({
  coverImage,
  title,
  category,
  slug,
}) {
  const { deleteBlog, viewAllBlogs } = useBlogStore();
  const navigate = useNavigate();
  return (
    <>
      <Card className="w-[290px] lg:max-w-[450px] lg:w-[450px] border-2 border-gray-500 p-0 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group">
        {/* Image */}
        <div className="h-[190px] lg:h-[300px] w-full relative">
          <img src={coverImage} className="w-full h-full object-cover" />

          {/* Hover Icons */}
          <div className="absolute top-2 left-2 transform -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-50">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
              <Edit
                onClick={() => {
                  navigate(`/admin/editblog/${category}/${slug}`);
                }}
                size={40}
                className="text-blue-600 cursor-pointer"
              />
            </button>
          </div>
          <div className="absolute top-2 right-2 transform translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-50">
            <button
              onClick={async () => {
                const result = await deleteBlog(slug);
                if (result) {
                  await viewAllBlogs(1); // Refresh to first page after deletion
                }
              }}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
            >
              <Trash2 size={40} className="text-red-600 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Title */}
        <CardContent className="px-2 py-0">
          <h1 className="text-2xl font-bold">{title}</h1>
        </CardContent>

        {/* Button */}
        <CardFooter className="px-2 pb-3">
          <Button
            onClick={() => navigate(`/blogdetail/${category}/${slug}`)}
            className="w-full bg-[#00274D] hover:bg-[#004080] py-1 lg:py-6 cursor-pointer text-xl lg:text-2xl transition-all duration-300"
          >
            Read More...
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

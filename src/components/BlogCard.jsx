import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ coverImage, title, category, slug }) {
  const navigate = useNavigate();
  return (
    <Card className="w-[290px] lg:max-w-[450px] lg:w-[450px] border-2 border-gray-500 p-0 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-[190px] lg:h-[300px] w-full">
        <img src={coverImage} className="w-full h-full object-cover" />
      </div>
      <CardContent className="px-2 py-0">
        <h1 className="text-2xl font-bold">{title}</h1>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <Button
          onClick={() => {
            navigate(`/latest-blogs/${category}/${slug}`);
          }}
          className="w-full bg-[#00274D] hover:bg-[#004080] py-1
 lg:py-6 cursor-pointer text-xl lg:text-2xl transition-all duration-300"
        >
          Read More...
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import useBlogStore from "@/store/useBlogStore";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdminBlogCard from "./AdminBlogCard";
import Loader from "@/components/Loader";

export default function Blogs() {
  const { viewAllBlogs, blogs, loading, hasMorePage } = useBlogStore();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    if (!loading && hasMorePage) {
      setPage((prev) => prev + 1);
    }
  };

    const formatCategory = (category) => {
    return category.toLowerCase().trim().replace(/\s+/g, "-");
   };

  useEffect(() => {
    viewAllBlogs(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1500px] mx-auto px-1 min-h-[100vh] pt-[73px] lg:pt-[83px]">
          {loading && page === 1 ? (
            <h1 className="text-2xl font-bold mt-2 text-center">Loading...</h1>
          ) : (
            <>
              <h1 className="text-3xl lg:text-6xl font-bold mt-2 text-center">
                All Blogs
              </h1>
              <div className="flex justify-center gap-y-8 sm:justify-between md:justify-between flex-wrap gap-2 md:7 lg:gap-[15px] lg:gap-y-[55px] mt-4">
                {blogs?.map((blog) => (
                  <AdminBlogCard
                    key={blog._id} // ✅ use unique key (_id) for proper rendering
                    coverImage={blog.coverImage}
                    title={blog.title}
                    id={blog?._id}
                    category={formatCategory(blog?.category)}
                    slug={blog?.slug}
                  />
                ))}
              </div>
            </>
          )}

          <div className="flex justify-center mt-7 mb-7">
            {hasMorePage && (
              <Button
                type="button"
                onClick={handleLoadMore}
                disabled={loading}
                className={`mt-7 cursor-pointer text-xl bg-[#00274D] px-3 transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4`}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
                    Please Wait
                  </>
                ) : (
                  "Load More"
                )}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

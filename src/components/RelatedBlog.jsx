import useBlogStore from "@/store/useBlogStore";
import React from "react";
import BlogCard from "./BlogCard";

function RelatedBlog({ currentBlog }) {
  const { blogs } = useBlogStore();
  const relatedBlog = blogs.filter(
    (eachblog) =>
      eachblog?.category === currentBlog.category &&
      eachblog._id !== currentBlog._id
  );

  if (relatedBlog.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <h1 className="text-xl md:text-[22px] font-semibold md:text-2xl lg:text-3xl text-center mt-2">Related Blogs </h1>
      <div className="mt-4 flex justify-center gap-y-8 sm:justify-between md:justify-between flex-wrap gap-2 md:7 lg:gap-[15px] lg:gap-y-[55px]">
        {relatedBlog.map((eachRelatedBlog, index) => (
          <BlogCard
            key={index}
            coverImage={eachRelatedBlog.coverImage}
            title={eachRelatedBlog.title}
            category={eachRelatedBlog.category}
            slug={eachRelatedBlog.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedBlog;

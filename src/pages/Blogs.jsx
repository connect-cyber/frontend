import BlogCard from "@/components/BlogCard";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import useBlogStore from "@/store/useBlogStore";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        {/* ------------------ PAGE TITLE ------------------ */}
        <title>Blogs Archives - MindCruize</title>

        {/* ------------------ CANONICAL URL ------------------ */}
        {/*
        <link
          rel="canonical"
          href="https://mindcruize.com/category/latest-blogs/"
        />
        --> Add live archive URL to avoid duplicate content
      */}

        {/* ------------------ PAGINATION ------------------ */}
        {/*
        <link
          rel="next"
          href="https://mindcruize.com/category/latest-blogs/page/2/"
        />
        --> Use if archive has multiple pages
      */}

        {/* ------------------ OPEN GRAPH ------------------ */}
        {/* Locale */}
        <meta property="og:locale" content="en_GB" />

        {/* Type */}
        <meta property="og:type" content="website" />

        {/* OG Title */}
        <meta property="og:title" content="Blogs Archives - MindCruize" />

        {/* OG URL - currently unavailable */}
        {/*
        <meta
          property="og:url"
          content="https://mindcruize.com/category/latest-blogs/"
        />
        --> Add live archive URL
      */}

        {/* Site name */}
        <meta property="og:site_name" content="MindCruize" />

        {/* OG Description - optional */}
        {/*
        <meta
          property="og:description"
          content="Read the latest blogs on career guidance, job search tips, and personal development."
        />
        --> Optional description for social sharing
      */}

        {/* OG Image - optional */}
        {/*
        <meta
          property="og:image"
          content="https://mindcruize.com/path-to-archive-banner.jpg"
        />
        --> Banner or representative image for social preview
      */}

        {/* ------------------ TWITTER CARD ------------------ */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Twitter Title - optional */}
        {/*
        <meta
          name="twitter:title"
          content="Blogs Archives - MindCruize"
        />
      */}

        {/* Twitter Description - optional */}
        {/*
        <meta
          name="twitter:description"
          content="Read the latest blogs on career guidance, job search tips, and personal development."
        />
      */}

        {/* Twitter Image - optional */}
        {/*
        <meta
          name="twitter:image"
          content="https://mindcruize.com/path-to-archive-banner.jpg"
        />
      */}
      </Helmet>
      <div className="max-w-[1500px] mx-auto px-2 pt-[73px] lg:pt-[83px] ">

      <h1 className="text-3xl lg:text-6xl font-bold mt-2 text-center">
        All Blogs
      </h1>

      {/* Initial loading only for page 1 */}
      {loading && page === 1 && (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      )}

      {/* Blogs दिखते रहेंगे even if page > 1 loading */}
      <div className="flex justify-center gap-y-8 sm:justify-between md:justify-between flex-wrap gap-2 md:7 lg:gap-[15px] lg:gap-y-[55px] mt-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>

      <div className="flex justify-center mt-7">
        {hasMorePage && (
          <Button
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
            className="mt-7 mb-7 cursor-pointer text-xl bg-[#00274D] px-3 transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4"
          >
            {loading && page > 1 ? (
              <>
                <Loader2 className="mr-2 animate-spin" /> Please Wait
              </>
            ) : (
              "Load More"
            )}
          </Button>
        )}
      </div>
    </div>
    
   </>
  );
}

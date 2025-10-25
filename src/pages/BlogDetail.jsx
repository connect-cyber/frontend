import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useBlogStore from "@/store/useBlogStore";
import { Helmet } from "react-helmet-async";
import Loader from "@/components/Loader";
import BlogShare from "@/components/BlogShare";
import RelatedBlog from "@/components/RelatedBlog";

export default function BlogDetail() {
  const { slug } = useParams();
  const blogUrl = window.location.href;
  const { getSingleVlogData, singleBlogData, loading, blogs } = useBlogStore();
  const currentBlogIndex = blogs.findIndex((blog) => blog.slug === slug);
  const nextBlog =
    currentBlogIndex < blogs.length - 1 ? blogs[currentBlogIndex + 1] : null;
  const previousBlog =
    currentBlogIndex > 0 ? blogs[currentBlogIndex - 1] : null;

  useEffect(() => {
    getSingleVlogData(slug);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{`${singleBlogData?.title}- MindCruize`}</title>
        <meta name="description" content={singleBlogData?.metaDescription} />
        <meta name="keywords" content={singleBlogData?.tags[0]} />
        <meta name="author" content={singleBlogData?.author || "MindCruize"} />

        {/* Open Graph */}
        <meta property="og:title" content={singleBlogData?.title} />

        <meta
          property="og:description"
          content={singleBlogData?.metaDescription}
        />

        <meta property="og:image" content={singleBlogData?.coverImage} />

        <meta property="og:type" content="article" />

        {/* <meta
          property="og:url"
          content={`http://localhost:5173/blog/${slug}`}/> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={singleBlogData?.title} />
        <meta
          name="twitter:description"
          content={singleBlogData?.metaDescription}
        />
        <meta name="twitter:image" content={singleBlogData?.coverImage} />

        {/* <link rel="canonical" href={`http://localhost:5173/blog/${slug}`} />
        <meta
          property="og:url"
          content={`http://localhost:5173/blog/${slug}`}
        /> */}
      </Helmet>
      <div className=" max-w-[1500px] mx-auto px-1 pt-[73px] lg:pt-[83px]">
        {loading ? (
          <Loader />
        ) : (
          <>
            <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-[50px]">
              {singleBlogData?.title}
            </h1>
            <div className="max-[450px]:h-[300px] mt-10 w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden lg:h-[650px]">
              <img
                src={singleBlogData?.coverImage}
                className="object-cover w-full h-full"
                alt="Blog Cover"
              />
            </div>

            <div className="flex justify-center">
              <div
                className="prose blog-content mt-4 max-w-none overflow-x-auto w-[90%] flex flex-col items-center"
                dangerouslySetInnerHTML={{ __html: singleBlogData?.content }}
              ></div>
            </div>

            <div className="mt-10 mb-10 w-full h-1 bg-gray-300" />

            <div className="flex justify-between mb-3 px-2 text-[16px] md:text-xl lg:text-2xl">
              {previousBlog ? (
                <Link
                  to={`/blogdetail/${previousBlog?.category}/${previousBlog?.slug}`}
                  className="hover:text-blue-600 hover:underline"
                >
                  Previous
                </Link>
              ) : (
                <div />
              )}

              {nextBlog ? (
                <Link
                  to={`/blogdetail/${nextBlog?.category}/${nextBlog?.slug}`}
                  className="hover:text-blue-600 hover:underline"
                >
                  Next
                </Link>
              ) : (
                <div />
              )}
            </div>
            <BlogShare blogUrl={blogUrl} blogTitle={singleBlogData?.title} />
            <RelatedBlog currentBlog={singleBlogData} />
          </>
        )}
      </div>
    </>
  );
}

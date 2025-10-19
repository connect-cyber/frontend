import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const BlogShare = ({ blogUrl, blogTitle }) => {
  return (
    <div className="flex gap-4 mt-6 mb-8">
      <FacebookShareButton url={blogUrl} quote={blogTitle}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={blogUrl} title={blogTitle}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={blogUrl} title={blogTitle}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
};

export default BlogShare;
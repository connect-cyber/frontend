import Carousel from "@/components/Carousel";
import Section from "@/components/Section";
import SlidingPartners from "@/components/slidePartner";
import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        {/* ------------------ BASIC SEO ------------------ */}
        <title>
          MindCruize : Personal Trainer for Job Search & Career Guidance
        </title>

        {/* Robots - tells search engines to index & follow */}
        <meta name="robots" content="index, follow" />

        {/* Author - page ka author */}
        <meta name="author" content="MindCruize Team" />

        {/* Language */}
        <meta http-equiv="content-language" content="en" />

        {/* Description - page ka short summary for SEO */}
        <meta
          name="description"
          content="MindCruize is your ultimate career guidance platform, offering fast job search options, personalized training, and access to a wide range of job openings."
        />

        {/* Keywords - optional, minor engines ke liye */}
        <meta
          name="keywords"
          content="Job Search, Career Guidance, Personal Trainer, MindCruize"
        />

        {/* ------------------ OPEN GRAPH (Social Sharing) ------------------ */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="MindCruize : Personal Trainer for Job Search & Career Guidance"
        />

        <meta
          property="og:description"
          content="MindCruize is your ultimate career guidance platform, offering fast job search options, personalized training, and access to a wide range of job openings."
        />

        {/* OG Image - currently unavailable */}
        {/*
        <meta property="og:image" content="https://mindcruize.com/path-to-your-image.jpg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/jpeg" />
        --> Image should be homepage hero/banner or logo, live URL
      */}

        {/* OG URL - live website URL, comment for now */}
        {/*
        <meta property="og:url" content="https://mindcruize.com/" />
        --> Replace with live homepage URL
      */}

        <meta property="og:site_name" content="MindCruize" />

        {/* Article publisher - Facebook page link */}
        {/*
        <meta property="article:publisher" content="https://www.facebook.com/your-page" />
        --> Replace with official Facebook page URL when ready
      */}

        {/* Article modified time - optional */}
        {/*
        <meta property="article:modified_time" content="2025-04-15T03:20:16+00:00" />
        --> ISO date format for last modification time
      */}

        {/* ------------------ TWITTER CARD ------------------ */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="MindCruize : Personal Trainer for Job Search & Career Guidance"
        />
        <meta
          name="twitter:description"
          content="MindCruize is your ultimate career guidance platform, offering fast job search options, personalized training, and access to a wide range of job openings."
        />

        {/* Twitter Image - currently unavailable */}
        {/*
        <meta name="twitter:image" content="https://mindcruize.com/path-to-your-image.jpg" />
        --> Replace with homepage hero/banner or logo image URL when ready
      */}

        {/* ------------------ CANONICAL URL ------------------ */}
        {/*
        <link rel="canonical" href="https://mindcruize.com/" />
        --> Replace with live homepage URL to avoid duplicate content
      */}

        {/* ------------------ OPTIONAL ADDITIONAL ------------------ */}
        {/*
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        --> Favicon and Apple Touch Icon for browser tabs and devices
      */}

        {/*
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MindCruize",
            "url": "https://mindcruize.com/"
          })}
        </script>
        --> JSON-LD structured data for rich search snippets
      */}
      </Helmet>
      <div className="pt-[73px] lg:pt-[83px]">
        <Carousel />
        <div className="mt-2 max-w-[1500px] mx-auto border-t border-[#00274D]"></div>
        <Section />
        <SlidingPartners />
      </div>
    </>
  );
}

export default Home;

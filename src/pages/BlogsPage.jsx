import React from "react";
import Posts from "../components/Route/BlogPosts/posts";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const BlogsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <Posts />
      <Footer />
    </div>
  );
};

export default BlogsPage;

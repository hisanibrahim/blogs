import React, { useState } from "react";

const BlogContext = React.createContext();

const blogPosts = [
  {
    title: "Post #1"
  },
  { title: "Post #2" }
];

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;

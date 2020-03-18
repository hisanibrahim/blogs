import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => {
          navigation.pop();
        })
      }
      initialValues={blogPost}
      //passed initial values of blog post to pre populate
    />
  );
};

const localStyles = StyleSheet.create({});

export default EditScreen;

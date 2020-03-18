import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    // form component for both add and edit blog
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        })
      }
    />
  );
};

const localStyles = StyleSheet.create({});

export default CreateScreen;

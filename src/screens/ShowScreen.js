import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  // DO NOT wrap testing function inside {}
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({});

export default ShowScreen;

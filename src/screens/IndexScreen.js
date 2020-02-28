import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Hello, You are in index screen.</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({});

export default IndexScreen;

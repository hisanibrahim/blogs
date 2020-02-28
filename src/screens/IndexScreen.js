import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Hello, You are in index screen.</Text>
      <Button title="Add blog post" onPress={addBlogPost}></Button>
      <FlatList
        data={data}
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

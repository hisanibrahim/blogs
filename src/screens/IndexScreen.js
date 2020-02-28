import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Hello, You are in index screen. Value is {value}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({});

export default IndexScreen;

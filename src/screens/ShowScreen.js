import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Foundation } from "@expo/vector-icons";

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
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", { id: navigation.getParam("id") })
          }
        >
          <Foundation name="pencil" size={30} style={localStyles.headerIcon} />
        </TouchableOpacity>
      );
    }
  };
};

const localStyles = StyleSheet.create({
  headerIcon: { marginRight: 10 }
});

export default ShowScreen;

import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    // useEffect used to invoke a method only once at initial render if 2nd arg === []
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      // add a listner to get blog posts from api when Index screen comes front
      getBlogPosts();
    });
    return () => {
      // this will execute when index screen destroying
      // removing listener that time prevent memory leak
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        // key extractor expects string. converting id from number to string
        ListEmptyComponent={() => (
          <Text style={localStyles.info}>No blogs.</Text>
        )}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={localStyles.item}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} style={localStyles.addIcon} />
        </TouchableOpacity>
      );
    }
  };
};

const localStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  addIcon: { marginRight: 10 },
  info: { textAlign: "center", marginTop: 5 }
});

export default IndexScreen;

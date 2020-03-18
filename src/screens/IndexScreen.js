import React, { useContext } from "react";
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
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Hello, You are in index screen.</Text>
      <Button title="Add blog post" onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        // key extractor expects string. converting id from number to string
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={localStyles.item}>
                <Text>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={localStyles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
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
  icon: { fontSize: 24 }
});

export default IndexScreen;

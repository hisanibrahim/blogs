import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={localStyles.label}>Enter title</Text>
      <TextInput
        multiline={true}
        value={title}
        onChangeText={text => setTitle(text)}
        style={localStyles.input}
      />
      <Text style={localStyles.label}>Enter content</Text>
      <TextInput
        multiline={true}
        value={content}
        onChangeText={text => setContent(text)}
        style={localStyles.input}
      />
      <Button
        title="Save blog post"
        onPress={() =>
          editBlogPost(id, title, content, () => {
            navigation.pop();
          })
        }
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  label: { fontSize: 18, margin: 10 },
  input: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 7,
    borderColor: "grey",
    borderWidth: 1
  }
});

export default EditScreen;

import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
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

export default CreateScreen;

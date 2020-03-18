import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

// automatically set default props on component render
// used beacase create blog post form have initial values empty

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
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

export default BlogPostForm;

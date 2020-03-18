import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 123456789),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);
    // array.filter iterates through each element and excludes element if callback return false

    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
      });
    default:
      state;
  }
};

//createDataContext() bounds actions with dispatch so able to call dispatch from here

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    // callback === function to execute after adding blog. eg: navigate to index page
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    {
      id: 1,
      title: "TEST BLOG",
      content:
        "Understand React Native with Hooks, Context, and React Navigation."
    }
  ]
);

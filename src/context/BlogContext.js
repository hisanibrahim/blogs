import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
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

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogPosts");
    // response.data === all blogposts from api === [ { } , { }]
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    // callback === function to execute after adding blog. eg: navigate to index page

    await jsonServer.post("/blogposts", { title, content });
    // json-server automatically add id

    callback();
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);

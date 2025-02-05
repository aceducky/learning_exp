import { createBrowserRouter } from "react-router";
import PostHome from "./routes/PostHome";
import { getPosts } from "./api/post_api";
import usePostsStore from "./stores/post_store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PostHome />,
    loader: async () => {
      const res = await getPosts();
      const setInitialPosts = usePostsStore.getState().setInitialPosts;
      console.log(res.data);
      setInitialPosts(res.data);
    },
  },
]);

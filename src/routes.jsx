import { createBrowserRouter } from "react-router";
import PostHome from "./routes/PostHome";
import { deletePostWithId, getPosts } from "./api/post_api";
import usePostsStore from "./stores/post_store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PostHome />,
    loader: async () => {
      const res = await getPosts();
      const setInitialPosts = usePostsStore.getState().setInitialPosts;
      setInitialPosts(res.data);
    },
    action: async ({ request }) => {
      try {
        const id = await request.text();
        const deletePostStore = usePostsStore.getState().deletePostWithId;
        console.log(id);
        const res = await deletePostWithId(id);
        console.log(res.status)
        if (res.status === 200) {
          deletePostStore(id);
        } else {
          console.log("Failed");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
]);
export default router;

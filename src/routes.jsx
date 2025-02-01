import { createBrowserRouter } from "react-router";
import PostHome from "./routes/PostHome";
import { getPosts } from "./api/post_api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PostHome />,
    loader: async () => {
      const res = await getPosts();
      const posts = res.data;
      //work to do , should i go for using zustand to store Posts as a state?
      // im using zustand but I've written useLoader data in the <PostHome /> for now
      //but i can also use zustand for setting posts state and still return data for the element, what should i do
    },
  },
]);

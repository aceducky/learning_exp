import { create } from "zustand";
import { combine } from "zustand/middleware";

const usePostsStore = create(
  combine({ posts: [] }, (set, get) => ({
    setInitialPosts: (newPosts) => set(() => ({ posts: [...newPosts] })),
    getPosts: () => get().posts,
    deletePostWithId: (pid) => {
      set(() => ({
        posts: get().posts.filter((post) => post.id !== pid),
      }))
    },
  }))
);

export default usePostsStore;

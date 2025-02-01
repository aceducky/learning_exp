import create from 'zustand';
import { combine } from 'zustand/middleware';

export const usePostsStore = create(
    combine(
        {
            posts: []
        },
        (set,get) => ({
            setPosts: (newPosts) => set((state) => ({
                posts: [...state.posts, ...newPosts]
            })),
            getPosts:()=> get().posts
        })
    )
);

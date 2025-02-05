import {create} from 'zustand';
import { combine } from 'zustand/middleware';

const usePostsStore = create(
    combine(
        {
            posts: []
        },
        (set,get) => ({
            setInitialPosts: (newPosts) => set(() => ({
                posts: [...newPosts]
            })),
            getPosts:()=> get().posts
        })
    )
);

export default usePostsStore;
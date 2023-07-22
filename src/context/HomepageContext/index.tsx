import React, { PropsWithChildren, createContext } from 'react'
import useGetPosts from '../../helpers/hooks/useGetPosts'
import useCreatePosts from '../../helpers/hooks/useCreatePost';

export const HomepageContext = createContext({
  posts: {
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: () => { },
  },
  createPost: {
    isLoading: false,
    isError: false,
    mutate: (params: unknown) => { }
  }
})
export default function HomepageContextProvider({ children }: PropsWithChildren<unknown>) {

  const posts = useGetPosts();
  const createPost = useCreatePosts()

  return (
    <HomepageContext.Provider value={{
      posts,
      createPost
    }}>
      {children}
    </HomepageContext.Provider>
  )
}

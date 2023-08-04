import React, { PropsWithChildren, createContext, useEffect } from "react";
import useGetPosts from "../../helpers/hooks/useGetPosts";
import useCreatePosts from "../../helpers/hooks/useCreatePost";

export const HomepageContext = createContext({
  posts: {
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: () => {},
  },
  createPost: {
    isLoading: false,
    isError: false,
    mutate: (params: unknown) => {},
  },
});
export default function HomepageContextProvider({
  children,
}: PropsWithChildren<unknown>) {
  const posts = useGetPosts();
  const createPost = useCreatePosts();

  useEffect(() => {
    window.addEventListener(
      "post-created",
      (e) => {
        posts.refetch();
      },
      false,
    );

    return () =>
      window.removeEventListener("post-created", (e) => {
        posts.refetch();
      });
  }, []);
  return (
    <HomepageContext.Provider
      value={{
        posts,
        createPost,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
}

import React, { PropsWithChildren, createContext } from "react";
import useGetPosts from "helpers/hooks/useGetPosts";
import useGetProfile from "helpers/hooks/useGetProfile";
import { QueryClient } from "react-query";

interface IProfilepageContextProviderProps extends PropsWithChildren {
  userId: string;
}

export const ProfilepageContext = createContext({
  posts: {
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: () => {},
  },
  profile: {
    data: undefined,
    isLoading: true,
    isError: false,
  },
});
export default function ProfilepageContextProvider({
  userId,
  children,
}: IProfilepageContextProviderProps) {
  const queryClient = new QueryClient();
  queryClient.resetQueries(["get-posts"]);
  const profile = useGetProfile(userId);
  const posts = useGetPosts(userId);
  //const user = useGetUser()

  const LoadingState = !!profile.isLoading || !!posts.isLoading;
  if (!!LoadingState) {
    return <div></div>;
  }

  return (
    <ProfilepageContext.Provider
      value={{
        posts,
        profile,
      }}
    >
      {children}
    </ProfilepageContext.Provider>
  );
}

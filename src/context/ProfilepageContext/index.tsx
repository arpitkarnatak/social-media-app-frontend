import React, { PropsWithChildren, createContext } from "react";
import useGetPosts from "helpers/hooks/useGetPosts";
import useGetProfile from "helpers/hooks/useGetProfile";
import { QueryClient } from "react-query";
import useFollow from "helpers/hooks/useFollow";
import { IUser } from "types";
import LoadingPlaceholderAndCover from "styles/cover";

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
    refetch: () => {}
  },
  follow: {
    isLoading: false,
    isError: false,
    isIdle: true,
    mutate: (params: any[]) => {},
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
  const follow = useFollow();

  const LoadingState = !!profile.isLoading || !!posts.isLoading;
  if (!!LoadingState) {
    return <LoadingPlaceholderAndCover />;
  }

  return (
    <ProfilepageContext.Provider
      value={{
        posts,
        profile,
        follow,
      }}
    >
      {children}
    </ProfilepageContext.Provider>
  );
}

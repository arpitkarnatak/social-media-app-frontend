import React, { PropsWithChildren, createContext, useEffect } from "react";
import useGetSinglePost from "../../helpers/hooks/useGetSinglePost";
import { IPost } from "../../types";
import useCreateComment from "../../helpers/hooks/useCreateComment";
import useGetComments from "../../helpers/hooks/useGetComments";

interface IPostPageContextProviderProps extends PropsWithChildren {
  postId: string;
}

interface IPostQuery {
  data?: IPost;
  isLoading: boolean;
  isError: boolean;
}

interface ICreateCommentQuery {
  isLoading: boolean;
  isError: boolean;
  mutate: (params: unknown[]) => void;
}

interface IGetCommentsQuery {
  data?: any[];
  isLoading: boolean;
  isError: boolean;
  mutate: () => void;
}

interface IPostPageContext {
  post: IPostQuery;
  createComment: ICreateCommentQuery;
  comments: IGetCommentsQuery;
}

export const PostPageContext = createContext<IPostPageContext>({
  post: {
    isLoading: true,
    isError: false,
  },
  createComment: {
    isLoading: false,
    isError: false,
    mutate: (params: unknown) => {},
  },
  comments: {
    isLoading: false,
    isError: false,
    mutate: () => {},
  },
});

export default function PostPageContextProvider({
  postId,
  children,
}: IPostPageContextProviderProps) {
  const post = useGetSinglePost(postId);
  const createComment = useCreateComment();

  const comments = useGetComments({ postId });

  useEffect(() => comments.mutate(), [])
  return (
    <PostPageContext.Provider
      value={{
        post,
        createComment,
        comments,
      }}
    >
      {children}
    </PostPageContext.Provider>
  );
}

import React from "react";
import { QueryClient, useMutation } from "react-query";
import { api } from "../../config/api";
import useGetComments from "./useGetComments";

export default function useCreateComment() {
  const commentAddedEvent = new CustomEvent("comment-added", { bubbles: true });
  let [parentComment, post]: [string | undefined, string | undefined] = [
    undefined,
    undefined,
  ];
  const queryClient = new QueryClient();
  const { isLoading, isError, mutate } = useMutation(
    ["create-comment"],
    async (params: unknown[]) => {
      const [postId, replyText, parentCommentId] = params;
      parentComment = parentCommentId as string;
      post = postId as string;
      try {
        await api.post("/comment", {
          params: {
            postId,
            parentCommentId,
            replyText,
          },
        });
      } catch (err) {
        console.error("Error", err);
      }
    },
    {
      onSuccess: () => {
        console.log("Refetching comments for parent ID", parentComment)
        queryClient.refetchQueries(["get-comments", parentComment, post]);
        parentComment = undefined
        post = undefined
        queryClient.invalidateQueries("create-comment");
      },
    }
  );
  return {
    isLoading,
    isError,
    mutate,
  };
}

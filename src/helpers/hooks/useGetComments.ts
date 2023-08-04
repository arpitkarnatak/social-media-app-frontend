import React from "react";
import { useMutation } from "react-query";
import { api } from "../../config/api";

interface CommentHookProps {
  postId: string;
  parentCommentId?: string;
}
export default function useGetComments({
  parentCommentId,
  postId,
}: CommentHookProps) {
  const { data, isLoading, isError, mutate } = useMutation(
    ["get-comments", parentCommentId, postId],
    async () => {
      try {
        const arrayForSearchParams = [["postId", postId]];
        if (!!parentCommentId) {
          arrayForSearchParams.push(["parentCommentId", parentCommentId]);
        }
        const params = new URLSearchParams(arrayForSearchParams);
        const response = await api.get("/comment", {
          params,
        });
        console.log("res", response.data.data);
        return response.data.data;
      } catch (err) {
        console.error("ERR:", err);
      }
    },
  );

  return {
    data,
    isLoading,
    isError,
    mutate,
  };
}

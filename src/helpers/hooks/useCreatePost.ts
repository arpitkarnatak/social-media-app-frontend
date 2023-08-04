import React from "react";
import { QueryClient, useMutation } from "react-query";
import { api } from "../../config/api";
import { Endpoints } from "../endpoints";

export default function useCreatePosts() {
  const PostCreatedEvent = new CustomEvent("post-created", { bubbles: true });
  const queryClient = new QueryClient();
  const { isLoading, isError, mutate } = useMutation(
    ["create-post"],
    async (params: any) => {
      const [title, body] = params;
      try {
        await api.post(Endpoints.Post,
          {
            params: {
              title,
              body,
            },
          }
        );
      } catch (err) {
        console.log("Error", err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("create-post")
        dispatchEvent(PostCreatedEvent)
      },
    }
  );
  return {
    isLoading,
    isError,
    mutate,
  };
}

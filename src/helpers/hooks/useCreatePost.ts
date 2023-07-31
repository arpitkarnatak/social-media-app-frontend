import React, { useContext } from "react";
import { QueryClient, useMutation } from "react-query";
import { HomepageContext } from "../../context/HomepageContext";
import axios from "axios";
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
        console.log("Successful Posts and event", PostCreatedEvent )
      },
    }
  );
  return {
    isLoading,
    isError,
    mutate,
  };
}

import React, { useContext } from "react";
import { QueryClient, useMutation } from "react-query";
import { HomepageContext } from "../../context/HomepageContext";
import axios from "axios";
import { api } from "../../config/api";

export default function useCreatePosts() {
  const queryClient = new QueryClient();
  const { isLoading, isError, mutate } = useMutation(
    ["create-post"],
    async (params: any) => {
      const [title, body] = params;
      try {
        await api.post("/user/post/create",
          {
            params: {
              title,
              body,
            },
          },
          {
            withCredentials: true,
          }
        );
      } catch (err) {
        console.log("Error", err);
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries("create-post"),
    }
  );
  return {
    isLoading,
    isError,
    mutate,
  };
}

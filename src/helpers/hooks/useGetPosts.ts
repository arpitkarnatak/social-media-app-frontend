import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { api } from "../../config/api";

export default function useGetPosts() {
  const {
    data,
    isLoading,
    isError,
    isRefetching,
    isRefetchError,
    isIdle,
    refetch,
  } = useQuery(["get-posts"], async () => {
    try {
      const response = await api.get("/user/post", {
        withCredentials: true,
      });
      return response.data.data;
    } catch (err) {
      console.log("Error", err);
    }
  });
  return {
    data,
    isLoading: isLoading || isRefetching || isIdle,
    isError: isError || isRefetchError,
    refetch,
  };
}

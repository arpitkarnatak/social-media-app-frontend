import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { api } from "../../config/api";
import { Endpoints } from "../endpoints";

export default function useGetPosts(userId?: string) {
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
      const params = userId ? new URLSearchParams([["userId", userId]]) : {};
      const response = await api.get(Endpoints.Post, {
        params,
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

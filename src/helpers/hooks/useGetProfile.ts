import React from "react";
import { useQuery } from "react-query";
import { api } from "../../config/api";

export default function useGetProfile(userId: string) {
  const { data, isLoading, isError, isRefetching, isRefetchError } = useQuery(
    ["get-profile"],
    async () => {
      try {
        const response = await api.get(`user/profile/${userId}`);
        return response.data.data;
      } catch (err) {
        console.log("Error while fetching User", err);
        return undefined;
      }
    }
  );
  return {
    data,
    isLoading: isLoading || isRefetching,
    isError: isError || isRefetchError,
  };
}
import React from "react";
import { IPost } from "types";
import Post from "components/Post/PostComponent";

interface ITimelineProps {
  posts?: IPost[];
  isLoadingPosts: boolean;
  isErrorPosts: boolean;
  refetchPosts?: () => void;
}

export default function Timeline({
  posts,
  isLoadingPosts,
  isErrorPosts,
}: ITimelineProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {!!isLoadingPosts && "is Loading Posts"}
      {!!isErrorPosts && "An error occured"}
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}

import React, { useContext } from "react";
import { HomepageContext } from "../../context/HomepageContext";
import Timeline from "../../pages/Home/Timeline";
import CreatePostSection from "../../components/CreatePost";
import { MaxWidthWrapper } from "../../styles/common";

export default function HomepageWrapper() {
  const { posts, createPost } = useContext(HomepageContext);
  return (
    <div
      style={{
        padding: "0 3%",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <MaxWidthWrapper>
        <CreatePostSection
          isCreatingPost={createPost.isLoading}
          isErrorCreatingPost={createPost.isError}
          createPost={createPost.mutate}
          reloadTimeline={posts.refetch}
        />
        <Timeline
          posts={posts.data}
          isLoadingPosts={posts.isLoading}
          isErrorPosts={posts.isError}
          refetchPosts={posts.refetch}
        />
      </MaxWidthWrapper>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import Timeline from "pages/Home/Timeline";
import { MaxWidthWrapper } from "styles/common";
import { ProfilepageContext } from "context/ProfilepageContext";
import ProfileCard from "components/ProfileCard";

export default function ProfilepageWrapper() {
  const { posts, profile } = useContext(ProfilepageContext);

  useEffect(() => {
    window.addEventListener("followers-changed", profile.refetch);
    return () =>
      window.removeEventListener("followers-changed", profile.refetch);
  }, []);
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
        {!!profile.data && <ProfileCard user={profile.data} />}
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

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProfilepageContextProvider from "context/ProfilepageContext";
import ProfilepageWrapper from "wrapper/Profile";

export default function Profile() {
  const { userId } = useParams();
  if (!!userId)
    return (
      <ProfilepageContextProvider userId={userId}>
        <ProfilepageWrapper></ProfilepageWrapper>
      </ProfilepageContextProvider>
    );
  else {
    return <>Loading Profile</>;
  }
}

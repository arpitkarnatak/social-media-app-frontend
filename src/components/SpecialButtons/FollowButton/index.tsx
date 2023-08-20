import { ProfilepageContext } from "context/ProfilepageContext";
import React, { useContext } from "react";
import { BiUserCheck, BiUserPlus } from "react-icons/bi";
import { IconButtonStyle } from "styles/buttons";

export default function FollowButton({
  userId,
  isAlreadyFollowing,
}: {
  userId: string;
  isAlreadyFollowing?: boolean;
}) {
  const { follow } = useContext(ProfilepageContext);
  const {
    isLoading: isLoadingFollow,
    isIdle: isIdleFollow,
    mutate: followUser,
  } = follow;

  if (!!isLoadingFollow)
    return (
      <IconButtonStyle onClick={() => followUser([userId, isAlreadyFollowing])} disabled={true}>
        ...
      </IconButtonStyle>
    );
  else
    return (
      <IconButtonStyle
        onClick={() => followUser([userId, isAlreadyFollowing])}
        disabled={isLoadingFollow}
      >
        {!!isAlreadyFollowing ? <BiUserCheck /> : <BiUserPlus />}
      </IconButtonStyle>
    );
}

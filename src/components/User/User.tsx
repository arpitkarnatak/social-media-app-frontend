import React from "react";
import { IUser } from "../../types";
import {
  DisplayName,
  UserAvatarOnlyImage,
  UserAvatarOnlyImageSvg,
  UserContainer,
  UserImage,
} from "./styles";
import { AiOutlineUser } from "react-icons/ai";

interface IUserThumbnailProps {
  user?: IUser;
}

export function UserAvatarOnly({ user }: IUserThumbnailProps) {
  if (!!!user) {
    return (
      <UserContainer>
        <UserAvatarOnlyImageSvg>
          <AiOutlineUser size={"large"} />
        </UserAvatarOnlyImageSvg>
      </UserContainer>
    );
  }
  return (
    <UserContainer>
      <UserAvatarOnlyImage src={user.avatar} alt={`${user?.username}-image`} />
    </UserContainer>
  );
}
export default function User({ user }: IUserThumbnailProps) {
  if (!!!user) {
    return (
      <UserContainer>
        <AiOutlineUser />
        <DisplayName>Guest</DisplayName>
      </UserContainer>
    );
  }
  return (
    <UserContainer>
      <UserImage src={user.avatar} alt="Profile Picture" />
      <DisplayName>{user.displayName}</DisplayName>
    </UserContainer>
  );
}

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
import { Link } from "react-router-dom";

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
    <a href={`/user/${user.username}`}>
        <UserAvatarOnlyImage
          src={user.avatar}
          alt={`${user?.username}-image`}
        />
      </a>
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
      <a href={`/user/${user.username}`}>
        <UserAvatarOnlyImage
          src={user.avatar}
          alt={`${user?.username}-image`}
        />
      </a>
      <DisplayName>{user.displayName}</DisplayName>
    </UserContainer>
  );
}

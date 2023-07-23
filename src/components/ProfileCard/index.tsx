import React from "react";
import { IUser } from "../../types";
import { ProfileSectionStyle, UserAvatarOnlyImage } from "./styles";
import { Title24, Title32 } from "../../styles/typography";
import { TextButton } from "../../styles/buttons";
import moment from "moment";
import { BiCalendar } from "react-icons/bi";

interface IProfileCardProps {
  user: IUser;
}


enum ActiveTab {
  TWEETS,
  TWEETS_AND_REPLIES,
  MEDIA,
  LIKES
}

export default function ProfileCard({ user }: IProfileCardProps) {
  return (
    <>
      <ProfileSectionStyle>
        <UserAvatarOnlyImage size="64px" src={user.avatar} alt={"Avatar"} />
        <div>
          <Title32>{user.displayName}</Title32>
          <Title24 color="#797979">@{user.username}</Title24>
        </div>

        <Title24>Some bio.... (This feature is yet to come)</Title24>


        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#797979'}}>
          <BiCalendar />
          <Title24 color="#797979">
            Joined {moment(user.createdAt).format("MMM Do YYYY")}
          </Title24>
        </div>

      </ProfileSectionStyle>

      <div style={{ width: '100%', display: 'flex' }}>
        <TextButton>Tweets</TextButton>
        <TextButton>Tweets and Replies</TextButton>
        <TextButton>Media</TextButton>
        <TextButton>Likes</TextButton>
      </div>
    </>);
}

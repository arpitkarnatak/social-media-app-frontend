import React, { useContext } from "react";
import { IUser } from "types";
import { ProfileSectionStyle, UserAvatarOnlyImage } from "./styles";
import { Title24, Title32 } from "styles/typography";
import { IconButtonStyle, TextButton } from "styles/buttons";
import moment from "moment";
import { BiCalendar, BiEdit } from "react-icons/bi";
import { GlobalContext } from "context/GlobalContext";
import FollowButton from "components/SpecialButtons/FollowButton";

interface IProfileForUserCard extends IUser {
  isFollowing?: boolean;
}
interface IProfileCardProps {
  user: IProfileForUserCard;
}

enum ActiveTab {
  TWEETS,
  TWEETS_AND_REPLIES,
  MEDIA,
  LIKES,
}

const openEditProfileModal = new CustomEvent("edit-profile", { bubbles: true });
function editProfile() {
  dispatchEvent(openEditProfileModal);
}

export default function ProfileCard({ user }: IProfileCardProps) {
  const { authenticatedUser } = useContext(GlobalContext);

  return (
    <>
      <ProfileSectionStyle>
        <UserAvatarOnlyImage size="64px" src={user.avatar} alt={"Avatar"} />
        <div>
          <Title32>{user.displayName}</Title32>
          <Title24 color="#797979">@{user.username}</Title24>
        </div>

        <Title24>Some bio.... (This feature is yet to come)</Title24>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#797979",
          }}
        >
          <BiCalendar />
          <Title24 color="#797979">
            Joined {moment(user.createdAt).format("MMM Do YYYY")}
          </Title24>
        </div>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#797979",
          }}>
          {user.id === authenticatedUser.data?.id && (
            <IconButtonStyle onClick={editProfile} disabled={true}>
              <BiEdit />
            </IconButtonStyle>
          )}
          {user.id !== authenticatedUser.data?.id && (
            <FollowButton
              userId={user.id}
              isAlreadyFollowing={user?.isFollowing}
            />
          )}
        </div>

        <Title32>
          {user.followerCount ?? 0} followers, {user.followingCount ?? 0}{" "}
          following
        </Title32>
      </ProfileSectionStyle>

      <div style={{ width: "100%", display: "flex" }}>
        <TextButton>Tweets</TextButton>
        <TextButton>Tweets and Replies</TextButton>
        <TextButton>Media</TextButton>
        <TextButton>Likes</TextButton>
      </div>
    </>
  );
}

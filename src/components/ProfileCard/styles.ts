import { styled } from "styled-components";
import { fontBaseCss } from "../../styles/typography";

export const ProfileSectionStyle = styled.div`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow:
    -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
    2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset;
  padding: 24px 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

interface IUserAvatarImageOnlyProps {
  size?: string;
}

export const UserAvatarOnlyImage = styled.img<IUserAvatarImageOnlyProps>`
  width: ${({ size }) => size || "48px"};
  height: ${({ size }) => size || "48px"};
  border-radius: ${({ size }) => size || "48px"};
  border: 2px solid black;
`;

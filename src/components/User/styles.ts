import { styled } from "styled-components";

export const UserImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 2px solid var(--dark, #000);
`;

export const DisplayName = styled.a`
  all: unset;
  font-size: 24px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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

export const UserAvatarOnlyImageSvg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
`;

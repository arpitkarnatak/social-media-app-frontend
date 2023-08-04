import { styled } from "styled-components";

export const PostContainer = styled.div`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow:
    -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
    2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset;
  padding: 24px 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  > p {
    margin: 0;
    font-size: 14px;
  }

  a {
    all: unset;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const PostTitle = styled.div`
  margin: 0 0 8px 0;

  > a {
    all: unset;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const PostBody = styled.div`
  margin: 6px 0;
  font-size: 24px;
`;

import { styled } from "styled-components";

export const CommentContainer = styled.div`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow:
    -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
    2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset;
  padding: clamp(16px, 3%, 24px);
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

export const CommentTitle = styled.div`
  > a {
    all: unset;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const CommentBody = styled.div`
  margin: 6px 0;
  font-size: 24px;
`;

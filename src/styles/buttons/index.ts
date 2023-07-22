import { styled } from "styled-components";
import { fontBaseCss } from "../typography";

export const TextButton = styled.button`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow: -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
    2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset;

  padding: 8px 24px;
  ${fontBaseCss};
  font-size: 24px;
  color: black;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    border-radius: 1px;
    background: var(--light-gray, #e1e1e1);
    box-shadow: -2px -2px 1px 0px rgba(255, 255, 255, 0.8) inset,
      2px 2px 1px 0px rgba(0, 0, 0, 0.8) inset;
  }
`;

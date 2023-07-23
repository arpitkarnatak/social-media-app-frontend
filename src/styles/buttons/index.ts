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
  width: inherit;

  &:hover {
    cursor: pointer;
    background: var(--grey-grey, #c0c0c0);
    /* outside/1 */
    box-shadow: 3px 3px 0px 0px #dfdfdf inset, -3px -3px 0px 0px #7f7f7f inset,
      2px 2px 0px 0px #fff inset, -2px -2px 0px 0px #000 inset,
      1px 1px 0px 0px #000 inset, -1px -1px 0px 0px #000 inset;
  }

  &:disabled {
    pointer-events: none;
    border-radius: 1px;
    background: var(--grey-grey, #c0c0c0);
    /* outside/2 */
    box-shadow: 2px 2px 0px 0px #dfdfdf inset, -2px -2px 0px 0px #7f7f7f inset,
      1px 1px 0px 0px #fff inset, -1px -1px 0px 0px #000 inset;

    color: #808080;
  }
`;

export const IconButtonStyle = styled.button`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow: -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
    2px 2px 1px 0px rgba(255, 255, 255, 0.5) inset;

  padding: 8px;
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

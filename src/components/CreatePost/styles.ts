import { styled } from "styled-components";
import { fontBaseCss } from "../../styles/typography";

export const CreatePostSectionStyle = styled.div`
  border-radius: 1px;
  background: var(--gray, #b8b8b8);
  box-shadow: -2px -2px 1px 0px rgba(0, 0, 0, 0.8) inset,
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
`;

export const MinimalStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`

export const MinimalTitleInput = styled.input`
  background: none;
  border: 0;
  border-bottom: 1px solid black;
  ${fontBaseCss};
  font-size: 24px;
  font-weight: bold;
  outline: none; 
  padding: 8px;
`

export const MinimalTextInput = styled.textarea`
  background: none;
  border: 0;
  border-bottom: 1px solid black;
  ${fontBaseCss};
  font-size: 24px;
  outline: none; 
  padding: 8px;
`
import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import User, { UserAvatarOnly } from "../User/User";
import {
  CreatePostSectionStyle,
  MinimalStyledForm,
  MinimalTextInput,
  MinimalTitleInput,
} from "./styles";
import { TextButton } from "../../styles/buttons";
import { BodySM } from "../../styles/typography";
import { PostPageContext } from "../../context/PostPageContext";

interface ICreateCommentSectionProps {
  postId: string;
  isCreatingComment: boolean;
  parentCommentId?: string;
  isErrorCreatingComment: boolean;
  createComment: (params: unknown[]) => void;
}

export default function CreateCommentSection({
  postId,
  isCreatingComment,
  parentCommentId,
  isErrorCreatingComment,
  createComment,
}: ICreateCommentSectionProps) {
  const { authenticatedUser } = useContext(GlobalContext);
  const [body, setBody] = useState("");

  async function handleCreateComment(e: SyntheticEvent) {
    try {
      e.preventDefault();
      createComment([postId, body, parentCommentId]);
      setBody("");
    } catch (err) {
      console.error("Error Creating Post");
    }
  }

  return (
    <CreatePostSectionStyle>
      <UserAvatarOnly user={authenticatedUser.data} />
      <MinimalStyledForm onSubmit={handleCreateComment}>
        <MinimalTextInput
          maxLength={140}
          placeholder="Comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={!!!authenticatedUser.data}
        ></MinimalTextInput>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            alignItems: "baseline",
          }}
        >
          <TextButton
            type="submit"
            disabled={
              !!isCreatingComment ||
              body.length < 3 ||
              !!!authenticatedUser.data
            }
            style={{ width: "fit-content" }}
          >
            {!!authenticatedUser.data && "Comment"}
            {!!!authenticatedUser.data && "View only mode"}
          </TextButton>
        </div>
      </MinimalStyledForm>
    </CreatePostSectionStyle>
  );
}

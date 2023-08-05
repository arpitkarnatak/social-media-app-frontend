import React, { useContext, useEffect, useState } from "react";
import { IComment } from "../../types";
import useGetComments from "../../helpers/hooks/useGetComments";
import { ButtonContainer, CommentBody, CommentContainer, CommentTitle } from "./styles";
import { BodySM, Title20, Title32 } from "../../styles/typography";
import { Link } from "react-router-dom";
import moment from "moment";
import { PostPageContext } from "../../context/PostPageContext";
import CreateCommentSection from "../CreateComment";
import { IconButtonStyle, TextButton } from "../../styles/buttons";
import { BiComment } from "react-icons/bi";

export default function CommentComponent({
  postId,
  id,
  author,
  createdAt,
  replyText,
}: IComment) {
  const replies = useGetComments({ parentCommentId: id, postId: postId });
  const { createComment } = useContext(PostPageContext);
  const [createReply, setCreateReply] = useState(false);
  const [viewReplies, setViewReplies] = useState(false)

  return (
    <CommentContainer>
      <CommentTitle>
        <Title20>
          commented by{" "}
          <Link to={`/user/${author.username}`}>{author.displayName}</Link>{" "}
          {moment(createdAt.toString()).fromNow()}
        </Title20>
      </CommentTitle>
      <CommentBody>{replyText}</CommentBody>
      <ButtonContainer>
        <IconButtonStyle
          onClick={() => {
            setCreateReply(true);
          }}
        >
          <BiComment />
        </IconButtonStyle>
        <TextButton
          onClick={() => {
            viewReplies ? setViewReplies(false) : setViewReplies(true)
            replies.mutate();
          }}
        >
          {viewReplies ? "Hide replies" : "View replies"}
        </TextButton>
      </ButtonContainer>
      {createReply && (
        <CreateCommentSection
          postId={postId}
          isCreatingComment={createComment.isLoading}
          parentCommentId={id}
          isErrorCreatingComment={createComment.isError}
          createComment={createComment.mutate}
        />
      )}
      {createComment.isLoading && <BodySM>Updating comment...</BodySM>}
      {createComment.isLoading && <BodySM>Updating comment...</BodySM>}
      {viewReplies && <div style={{ marginLeft: "clamp(16px, 3%, 24px)", width: "100%" }}>
        {replies?.data?.map((comment: IComment) => (
          <CommentComponent key={comment.id} {...comment} />
        ))}
      </div>}
    </CommentContainer>
  );
}

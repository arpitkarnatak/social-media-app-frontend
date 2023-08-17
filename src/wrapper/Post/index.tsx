import React, { useContext, useEffect } from "react";
import { PostPageContext } from "context/PostPageContext";
import Post from "components/Post/PostComponent";
import { OuterPageWrapper } from "styles/common/OuterPageWrapper";
import CreateCommentSection from "components/CreateComment";
import CommentComponent from "components/Comment";

export default function PostPageWrapper() {
  const { post, createComment, comments } = useContext(PostPageContext);

  if (!!!post.data) {
    return <>Post not found</>;
  }
  return (
    <OuterPageWrapper>
      <Post {...post.data} />
      <CreateCommentSection
        postId={post.data.id}
        isCreatingComment={createComment.isLoading}
        isErrorCreatingComment={createComment.isError}
        createComment={createComment.mutate}
      />
      {comments?.data?.map((comment: any) => (
        <CommentComponent key={comment.id} {...comment} />
      ))}
    </OuterPageWrapper>
  );
}
/*
 */

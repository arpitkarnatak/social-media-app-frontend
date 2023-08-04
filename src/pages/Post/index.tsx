import React from "react";
import { useParams } from "react-router-dom";
import useGetSinglePost from "../../helpers/hooks/useGetSinglePost";
import PostPageContextProvider from "../../context/PostPageContext";
import PostPageWrapper from "../../wrapper/Post";

export default function Post() {
  const { postId } = useParams();

  if (!!!postId) {
    return <> No Post Id </>;
  }
  return (
    <PostPageContextProvider postId={postId}>
      <PostPageWrapper />
    </PostPageContextProvider>
  );
}

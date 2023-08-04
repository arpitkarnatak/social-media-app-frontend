import React, { useContext, useState } from 'react'
import { IComment } from '../../types'
import useGetComments from '../../helpers/hooks/useGetComments'
import { CommentBody, CommentContainer, CommentTitle } from './styles'
import { Title20, Title32 } from '../../styles/typography'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { PostPageContext } from '../../context/PostPageContext'
import CreateCommentSection from '../CreateComment'

export default function CommentComponent({
    postId,
    id,
    author,
    createdAt,
    replyText,
}: IComment) {

    const replies = useGetComments({parentCommentId: id, postId: postId})
    const {createComment} = useContext(PostPageContext)
    const [createReply, setCreateReply] = useState(false)
  return (
    <CommentContainer>
        <CommentTitle>
            <Title20>
                commented by{" "}
                <Link to={`/user/${author.username}`}>
                    {author.displayName}
                </Link>
                {" "}
                {moment(createdAt.toString()).fromNow()}
            </Title20>
        </CommentTitle>
        <CommentBody>
            {replyText}
        </CommentBody>

        <button onClick={() => {
            console.log("Comment replu fpr", id)
            replies.mutate()
            }}>
            View Replies
        </button>

        <button onClick={() => {
            console.log("Comment kar", id)
            setCreateReply(true)
            }}>
                Reply
        </button>
        {
            createReply && 
            <CreateCommentSection
                postId={postId}
                isCreatingComment={createComment.isLoading}
                parentCommentId={id}
                isErrorCreatingComment={createComment.isError}
                createComment={createComment.mutate}
            />
        }
        <div style={{ marginLeft: 'clamp(16px, 3%, 24px)', width: '100%'}}>
            {replies?.data?.map((comment: IComment) => <CommentComponent key={comment.id} {...comment} />)}
        </div>

    </CommentContainer>
  )
}

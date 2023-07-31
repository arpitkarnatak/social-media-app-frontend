import React, { useContext } from 'react'
import { PostPageContext } from '../../context/PostPageContext'
import Post from '../../components/Post/PostComponent'
import { OuterPageWrapper } from '../../styles/common/OuterPageWrapper'

export default function PostPageWrapper() {
    const {post} = useContext(PostPageContext)

    if (!!!post.data) {
        return <>Post not found</>
    }
  return (
    <OuterPageWrapper>
        <Post {...post.data} />
    </OuterPageWrapper>
  )
}

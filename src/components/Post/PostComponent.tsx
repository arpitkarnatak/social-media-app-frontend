import React from 'react'
import { IPost } from '../../types'
import User from '../User/User'
import { PostBody, PostContainer, PostTitle } from './styles'
import moment from 'moment'
import { BodySM, Title20, Title24, Title32 } from '../../styles/typography'
import { Link } from 'react-router-dom'

export default function Post({
    id,
    title,
    body,
    author,
    createdAt
}: IPost) {
    return (
        <PostContainer>
            <Title20>Posted by <Link to={`/user/${author.username}`}>{author.displayName}</Link> {moment(createdAt.toString()).fromNow()}</Title20>
            <PostTitle>
                <Link to={`/post/${id}`}>
                    <Title32>{title}</Title32>
                </Link>
            </PostTitle>
            <Title24>{body}</Title24>
        </PostContainer>
    )
}

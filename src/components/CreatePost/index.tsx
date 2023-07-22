import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import User from '../User/User'
import { CreatePostSectionStyle, MinimalStyledForm, MinimalTextInput, MinimalTitleInput } from './styles'
import { TextButton } from '../../styles/buttons'
import { BodySM } from '../../styles/typography'

interface ICreatePostSectionProps {
    isCreatingPost: boolean,
    isErrorCreatingPost: boolean,
    createPost: (params: unknown) => void
    reloadTimeline: () => void
}

export default function CreatePostSection(
    {
        isCreatingPost,
        isErrorCreatingPost,
        createPost,
        reloadTimeline
    }: ICreatePostSectionProps
) {

    const { authenticatedUser } = useContext(GlobalContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    async function handleCreatePost(e: SyntheticEvent) {
        e.preventDefault()
        createPost([title, body])
    }

    return (
        <CreatePostSectionStyle>
            <User user={authenticatedUser.data} /> says
            <MinimalStyledForm onSubmit={handleCreatePost}>
                <MinimalTitleInput placeholder='Add a fun title' value={title} onChange={(e) => setTitle(e.target.value)}>
                </MinimalTitleInput>
                <MinimalTextInput maxLength={140} placeholder='Add some description' value={body} onChange={(e) => setBody(e.target.value)}>
                </MinimalTextInput>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'baseline'}}>
                    <BodySM>{body.length}/140</BodySM>
                    <TextButton type='submit' disabled={!!isCreatingPost || body.length < 3 || title.length < 3}>
                        Create Post
                    </TextButton>
                </div>
            </MinimalStyledForm>
        </CreatePostSectionStyle>
    )
}

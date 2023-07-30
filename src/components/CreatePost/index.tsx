import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import User, { UserAvatarOnly } from '../User/User'
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
        try {
            e.preventDefault()
            createPost([title, body])
            setTitle("")
            setBody("")
        }

        catch (err) {
            console.error("Error Creating Post")
        }
    }

    return (
        <CreatePostSectionStyle>
            <UserAvatarOnly user={authenticatedUser.data} />
            <MinimalStyledForm onSubmit={handleCreatePost}>
                <MinimalTitleInput placeholder="What's on your mind" value={title} onChange={(e) => setTitle(e.target.value)} disabled={!!!authenticatedUser.data}>
                </MinimalTitleInput>
                <MinimalTextInput maxLength={140} placeholder="Elaborate what's on your mind lol" value={body} onChange={(e) => setBody(e.target.value)} disabled={!!!authenticatedUser.data}>
                </MinimalTextInput>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'baseline' }}>
                    <BodySM>{body.length}/140</BodySM>
                    <TextButton type='submit' disabled={!!isCreatingPost || body.length < 3 || title.length < 3 || !!!authenticatedUser.data} style={{ width: 'fit-content' }}>
                        {!!authenticatedUser.data && 'Create Post'}
                        {!!!authenticatedUser.data && 'View only mode'}
                    </TextButton>
                </div>
            </MinimalStyledForm>
        </CreatePostSectionStyle>
    )
}

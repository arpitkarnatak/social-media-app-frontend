import React from 'react'
import { QueryClient, useMutation } from 'react-query'
import { api } from '../../config/api'

export default function useCreateComment() {

    const commentAddedEvent = new CustomEvent("comment-added", { bubbles: true });
    const queryClient = new QueryClient();
    const {
        isLoading,
        isError,
        mutate
    } = useMutation(['create-comment'], async (params: unknown[]) => {
        const [postId, replyText, parentCommentId] = params
        try {
            await api.post("/comment", {
            params: {
                postId,
                parentCommentId,
                replyText
            }
        })
    } catch(err) {
        console.error("Error", err)
    }
    }, {
        onSuccess: () => {
            dispatchEvent(commentAddedEvent)
            queryClient.invalidateQueries('create-comment')
        }
    })
  return {
    isLoading,
    isError,
    mutate
  }
}

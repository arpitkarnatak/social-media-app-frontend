import React, { PropsWithChildren, createContext } from 'react'
import useGetSinglePost from '../../helpers/hooks/useGetSinglePost'
import { IPost } from '../../types'

interface IPostPageContextProviderProps extends PropsWithChildren {
    postId: string
}

interface IPostQuery {
    data?: IPost;
    isLoading: boolean;
    isError: boolean
}

interface IPostPageContext {
    post: IPostQuery
}

export const PostPageContext = createContext<IPostPageContext>({
    post: {
        isLoading: true,
        isError: false,
    }
})

export default function PostPageContextProvider({postId, children}: IPostPageContextProviderProps) {
    const post = useGetSinglePost(postId)
    const LoadingState =  !!post.isLoading

    console.log("Ob", Object.keys(post ?? {}))
    if (LoadingState) {
      return (<div>
        Loading
      </div>)
    }
    return (
        <PostPageContext.Provider value={{
            post
        }}>
            {children}
        </PostPageContext.Provider>
    )
}

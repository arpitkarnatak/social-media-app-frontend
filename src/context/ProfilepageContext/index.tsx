import React, { PropsWithChildren, createContext } from 'react'
import useGetPosts from '../../helpers/hooks/useGetPosts'
import useCreatePosts from '../../helpers/hooks/useCreatePost';
import useGetUser from '../../helpers/hooks/useGetUser';
import useGetProfile from '../../helpers/hooks/useGetProfile';
import { useNavigate } from 'react-router-dom';

interface IProfilepageContextProviderProps extends PropsWithChildren{
  userId: string
}

export const ProfilepageContext = createContext({
  posts: {
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: () => { },
  },
  profile: {
    data: undefined,
    isLoading: true,
    isError: false,
  }
})
export default function ProfilepageContextProvider({ userId, children }: IProfilepageContextProviderProps) {
  const navigate = useNavigate()
  const profile = useGetProfile(userId)
  const posts = useGetPosts(userId);
  //const user = useGetUser()

  if (!!!profile.data) {
    navigate("/")
  }
  return (
    <ProfilepageContext.Provider value={{
      posts,
      profile
    }}>
      {children}
    </ProfilepageContext.Provider>
  )
}

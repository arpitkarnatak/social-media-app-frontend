import React from 'react'
import { useQuery } from 'react-query'
import { api } from '../../config/api'

export default function useGetUser() {
    const {
        data,
        isIdle,
        isLoading,
        isError,
        isRefetching,
        isRefetchError,
        refetch
    } = useQuery(['fetch-user'],
        async function getUser() {
            try {
                const response = await api.get("/user", {
                    withCredentials: true
                })
                return response.data.data
            } catch (err) {
                console.log("Error", err)
                return undefined
            }
        })

    return {
        data,
        isLoading: isLoading || isRefetching || isIdle,
        isError: isError || isRefetchError,
        refetch
    }
}

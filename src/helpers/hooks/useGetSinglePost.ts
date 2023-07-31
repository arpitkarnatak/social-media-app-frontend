import { useQuery } from "react-query"
import { api } from "../../config/api"
import { Endpoints } from "../endpoints"

export default function useGetSinglePost(postId: string) {

    const {
        data,
        isLoading,
        isError,
        isRefetchError,
        isRefetching,
    } = useQuery(['get-post'], async () => {

        try {
            const params = new URLSearchParams([["postId", postId]])
            const response = await api.get(Endpoints.Post, {
                params,
            })

            if (response.data.data.length === 0) { 
                throw new Error("This post does not exist")
            }

            return response.data.data[0]

        } catch(err) {
            console.log("Error:", err)
            return undefined
        }
    })
    return {
        data,
        isLoading: isLoading || isRefetching,
        isError: isError || isRefetchError,
    }
}
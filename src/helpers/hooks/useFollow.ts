import axios from "axios";
import { api } from "config/api";
import { useMutation, useQueryClient } from "react-query";

export default function useFollow() {
  const client = useQueryClient();
  const { isLoading, isError, mutate, isIdle } = useMutation(
    "follow-user",
    async (params: any[]) => {
      const [userToFollow, alreadyFollowing] = params;
      try {
        if (!!alreadyFollowing) {
          await api.post("/follow/unfollow", {
            params: {
              userId: userToFollow,
            },
          });
        } else {
          await api.post("/follow", {
            params: {
              userId: userToFollow,
            },
          });
        }
      } catch (err) {
        console.error("Unexpected error", err);
      }
    },
    {
      onSuccess: () => {
        client.invalidateQueries("follow-user");
        const followersChangedEvent = new CustomEvent("followers-changed", {
          bubbles: true,
        });
        dispatchEvent(followersChangedEvent)
      },
    }
  );
  return { isLoading, isError, mutate, isIdle };
}

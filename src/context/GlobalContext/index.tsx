import { ReactNode, PropsWithChildren, createContext } from "react";
import useGetUser from "helpers/hooks/useGetUser";
import { IUser } from "types";
import { RefetchOptions, UseQueryResult } from "react-query";

interface IAuthenticatedUserQuery {
  data?: IUser;
  isLoading: boolean;
  isError: boolean;
  refetch?: (options?: RefetchOptions) => Promise<UseQueryResult>;
}

export const GlobalContext = createContext<{
  authenticatedUser: IAuthenticatedUserQuery
}>({
  authenticatedUser: {
    data: undefined,
    isLoading: false,
    isError: false,
  },
});

export default function GlobalContextProvider({
  children,
}: PropsWithChildren<unknown>) {
  const authenticatedUser = useGetUser();
  return (
    <GlobalContext.Provider
      value={{
        authenticatedUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

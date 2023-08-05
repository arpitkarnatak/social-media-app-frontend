import React, { useContext } from "react";
import { MainHeaderContainer } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import User, { UserAvatarOnly } from "../User/User";
import { IconButtonStyle, TextButton } from "../../styles/buttons";
import GetStatus from "./GetStatus";
import { REACT_APP_BACKEND_URL } from "../../config/env";
import { AiOutlineClose } from "react-icons/ai";

async function handleLogin() {
  window.location.href = `${REACT_APP_BACKEND_URL}/auth/google`;
}

async function handleLogout() {
  window.location.href = `${REACT_APP_BACKEND_URL}/auth/logout`;
}

export default function Header() {
  const { authenticatedUser } = useContext(GlobalContext);
  return (
    <MainHeaderContainer>
      <GetStatus />
      {!!!authenticatedUser.data ? (
        <TextButton onClick={handleLogin} style={{ width: "fit-content" }}>
          Login
        </TextButton>
      ) : (
        <div style={{ display: "flex", gap: "12px" }}>
          <UserAvatarOnly user={authenticatedUser.data} />
          <IconButtonStyle onClick={handleLogout} style={{ width: "fit-content" }}>
            <AiOutlineClose />
          </IconButtonStyle>
        </div>
      )}
    </MainHeaderContainer>
  );
}

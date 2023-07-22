import React, { useContext } from 'react'
import { MainHeaderContainer } from './styles'
import { GlobalContext } from '../../context/GlobalContext'
import User from '../User/User'

async function handleLogin() {
    window.location.href = 'http://localhost:8080/auth/google'
}

async function handleLogout() {
    window.location.href = 'http://localhost:8080/auth/logout'
}

export default function Header() {
    const { authenticatedUser } = useContext(GlobalContext)
    console.log("SS", authenticatedUser)
    return (
        <MainHeaderContainer>

            <button onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleLogout}>
                Logout
            </button>
            <User user={authenticatedUser.data} />
        </MainHeaderContainer>
    )
}

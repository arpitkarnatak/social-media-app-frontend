import React, { useContext } from 'react'
import { MainHeaderContainer } from './styles'
import { GlobalContext } from '../../context/GlobalContext'
import User, { UserAvatarOnly } from '../User/User'
import { TextButton } from '../../styles/buttons'

async function handleLogin() {
    window.location.href = 'http://localhost:8080/auth/google'
}

async function handleLogout() {
    window.location.href = 'http://localhost:8080/auth/logout'
}

export default function Header() {
    const { authenticatedUser } = useContext(GlobalContext)
    return (
        <MainHeaderContainer>
            {!!!authenticatedUser.data ? <TextButton onClick={handleLogin}>
                Login
            </TextButton> :
                <div style={{ display: 'flex', gap: '12px' }}>
                    <UserAvatarOnly user={authenticatedUser.data} />
                    <TextButton onClick={handleLogout}>
                        Logout
                    </TextButton>
                </div>
            }
        </MainHeaderContainer>
    )
}

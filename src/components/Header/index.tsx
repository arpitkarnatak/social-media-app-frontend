import React, { useContext } from 'react'
import { MainHeaderContainer } from './styles'
import { GlobalContext } from '../../context/GlobalContext'
import User, { UserAvatarOnly } from '../User/User'
import { TextButton } from '../../styles/buttons'
import GetStatus from './GetStatus'

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
            <GetStatus />
            {!!!authenticatedUser.data ? <TextButton onClick={handleLogin} style={{ width: 'fit-content' }}>
                Login
            </TextButton> :
                <div style={{ display: 'flex', gap: '12px' }}>
                    <UserAvatarOnly user={authenticatedUser.data} />
                    <TextButton onClick={handleLogout} style={{ width: 'fit-content' }}>
                        Logout
                    </TextButton>
                </div>
            }
        </MainHeaderContainer>
    )
}

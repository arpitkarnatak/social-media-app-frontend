import React, { useEffect, useState } from 'react'
import { api } from '../../config/api'
import { TextButton } from '../../styles/buttons'
import { Title20 } from '../../styles/typography'

export default function GetStatus() {
    const [isBackendActive, setIsBackendActive] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                const response = await api.get("");
                setIsBackendActive(true)
            } catch (err) {
                console.error("Backend server is inactive, click this button a few times.")
            }
        })()
    }, [])
    return (
        <TextButton style={{width: 'fit-content'}} disabled={isBackendActive}>
            {isBackendActive ? <Title20 color="green">Active</Title20> : <Title20 color='red'>Inactive</Title20>}
        </TextButton>
    )
}

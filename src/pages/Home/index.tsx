import React, { useContext } from 'react'
import HomepageContextProvider from '../../context/HomepageContext'
import HomepageWrapper from '../../wrapper/Home'

export default function Home() {
    return (
        <HomepageContextProvider>
            <HomepageWrapper></HomepageWrapper>
        </HomepageContextProvider>
    )
}

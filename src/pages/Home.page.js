import React from 'react'
import About from '../components/about/About.component'
import Banner from '../components/banner/Banner.component'
import Header from '../components/header/Header.component'
import Contact from '../components/contact/Contact.component'
import HomeScreen from '../components/homescreen/HomeScreen.component'

function HomePage() {
    return (
        <>
            <Header bgColor="black"></Header>
            <Banner></Banner>
            <HomeScreen></HomeScreen>
            <About></About>
            <Contact></Contact>
        </>
    )
}


export default HomePage
import React from 'react'
import About from '../components/about/About.component'
import Banner from '../components/banner/Banner.component'
import Header from '../components/header/Header.component'
import Contact from '../components/contact/Contact.component'
import Skill from '../components/skill/Skill.component'

function HomePage() {
    return (
        <>
            <Header bgColor="black"></Header>
            <Banner></Banner>
            <Skill></Skill>
            <About></About>
            <Contact></Contact>
        </>
    )
}


export default HomePage
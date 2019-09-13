import React from 'react'
import styled from 'styled-components'
import Info from '../components/AboutPage/Info'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'

export default function AboutPages() {
    return (
        <>
            <Hero img={aboutBcg}/>
            <Info/>
        </>
    )
}

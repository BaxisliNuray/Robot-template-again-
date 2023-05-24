import React from 'react'
import { Helmet } from "react-helmet";
import Connected from '../Home sections/Connected';
import Features from '../Home sections/Features';
import Hero from '../Home sections/Hero';
import RobotCards from '../Home sections/RobotCards';
import home from "../pages/home.module.css"

function Home() {
    return (
        <>
            <div className={home.bgImage}>
                <Helmet>
                    <title>HOME PAGE</title>
                </Helmet>
                <Hero />
            </div>
            <RobotCards />
            <Features/>
            <Connected/>
        </>
    )
}

export default Home
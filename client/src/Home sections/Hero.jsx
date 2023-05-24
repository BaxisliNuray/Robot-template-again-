import { Container } from '@mui/system'
import React from 'react'
import hero from "../Home sections/hero.module.css"
import Grid from '@mui/material/Grid';

function Hero() {
    return (
        <Container>
            <div style={{ paddingTop: '15%' }} >


                <Grid container spacing={2}>
                    <Grid item lg={7}>
                        <p className={hero.text}>Improved <br />
                            Production level <br />
                            with Robotics</p>
                            <p style={{color:'white',fontFamily:'sans-serif',paddingTop:'10px'}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
                    </Grid>
                    <Grid item lg={3}>
                        <img className={hero.img} src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
                    </Grid>

                </Grid>
            </div>


        </Container>
    )
}

export default Hero
import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';

function Connected() {
    return (
        <div style={{ paddingTop: '30px' }}>
            <Container>

                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <img width="90%" src="https://preview.colorlib.com/theme/robotics/img/about-img.png" alt="head" />
                    </Grid>
                    <Grid style={{ paddingTop: '10%' }} item lg={4}>
                        <h1>Globally Connected <br />
                            by Large Network</h1> <br />
                        <p>We are here to listen from you deliver exellence</p><br />
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</span>
                    </Grid>
                    <Grid item lg={5} style={{paddingTop:'10%'}}>
                        <p>BRAND NEW APP TO BLOW YOUR MIND</p> <br />
                        <h1>We've made a life
                            that will change you</h1> <br />
                        <h5>We are here to listen from you deliver exellence</h5> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Grid>
                    <Grid item style={{paddingTop:'9%'}} lg={7}>
                        <img style={{width:'90%'}} src="https://preview.colorlib.com/theme/robotics/img/banner-bg.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>)
}

export default Connected
import { Container } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


function Features() {
    return (
        <div style={{backgroundImage:'url(https://preview.colorlib.com/theme/robotics/img/feature-bg.jpg)',backgroundRepeat:'none'}}>
            <Container style={{ padding: '30px 0px' }}>
                <Typography style={{ fontSize: '35px', textAlign: 'center', fontWeight: '700' }}>Some Features that Made us Unique</Typography>
                <p style={{ color: 'lightgrey', textAlign: 'center',marginTop:'2%',fontFamily:'sans-serif'}}>Who are in extremely love with eco friendly system.</p>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345, marginTop: '100px' }}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <PersonOutlineOutlinedIcon />
                                        Expert Technicians
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345, margin: '100px 0px' }}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <WorkspacePremiumOutlinedIcon />
                                        Professional Service
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345, margin: '100px 0px' }}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        < LocalPhoneOutlinedIcon />
                                        Great Support
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345}}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        < RocketLaunchOutlinedIcon />
                                        Technical Skills
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <  DiamondOutlinedIcon/>
                                        Highly Recomended
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card sx={{ maxWidth: 345}}>
                                <CardContent style={{ padding: '40px 30px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        < ChatBubbleOutlineOutlinedIcon /> 
                                        Positive Reviews
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>

                </Box>

            </Container>
        </div>
        )
}

export default Features
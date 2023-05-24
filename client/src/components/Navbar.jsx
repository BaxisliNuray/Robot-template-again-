import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container } from '@mui/material';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: 'rgba(138, 144, 255, 0.9)', boxShadow: 'none',position:'fixed' }} position="static">
                    <Container>
                        <Toolbar style={{ display: 'flex' }} >
                            <Link style={{
                                color: 'black',
                                fontFamily: 'Impact',
                                fontSize: '35px',
                                textDecoration:'none'
                            }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                               <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="" />
                            </Link>
                            <div style={{display:'flex',margin:'0 auto '}}>
                                <Button><Link style={{textDecoration:'none',color:'white'}} to='/'>HOME</Link></Button>
                                <Button><Link style={{textDecoration:'none',color:'white'}} to='/add'>Add </Link></Button>

                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar
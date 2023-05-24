import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { deleteRobots, getAllRobots } from '../api/requests';
function RobotCards() {
    const [robcards, setRobcards] = useState()
    useEffect(() => {
        getAllRobots().then((res) => {
            setRobcards(res)
        })
    }, [])
    return (
        <>
            <Container>
                <h1 style={{ textAlign: 'center' }}>Featured Robotics Products to Show</h1>
                <p style={{ textAlign: 'center', paddingTop: '1%', color: 'lightgrey' }}>Who are in extremely love with eco friendly system.</p>

                <Grid container style={{ paddingTop: '5%' }} spacing={2}>
                    {robcards && robcards.map((elem) => (
                        <Grid key={elem._id} item lg={3}>
                            <Card  sx={{ maxWidth: 280 }}>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '30px 0px' }}>
                                    <img
                                        height="200"
                                        src={elem.img}
                                        alt='robot'
                                    />
                                </div>
                                <CardContent style={{ backgroundColor: '#f9f9ff' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.desc}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: {elem.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"
                                            onClick={() => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You won't be able to revert this!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText: "Yes, delete it!",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        deleteRobots(elem._id).then((res) => {
                                                            Swal.fire(
                                                                `${elem.name} Deleted!`,
                                                                "Your artist has been deleted.",
                                                                "success"
                                                            );
                                                        });
                                                        setRobcards(
                                                            robcards.filter((x) => x._id !== elem._id)
                                                        );
                                                    }
                                                });
                                            }}
                                            variant="outlined"
                                            color="warning"
                                        >delete</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default RobotCards
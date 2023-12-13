import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button,Grid, Typography,Paper} from '@mui/material';

function Home() {
    const navigate = useNavigate();

return (
    <div>
    <Grid sx={{p:'15%',pl:'20%',pr:'20%'}} container direction="column" alignItems="center" justify="center">
    <Paper variant="elevation" elevation={20}>
    <Typography variant='h6' align='center' sx={{p:'20px',mb:'10px'}}>
      This is a model application to demonstrate Mysqldb connectivity with Python Flask backend of an application
      for login,signup and logout actions using React for its frontend.</Typography>
    <Grid container direction="column" alignItems="center" justify="center">
      <Button sx={{mb:'20px'}} variant="contained" onClick={() => navigate('/')}>Logout</Button>
    </Grid>
    </Paper>
    </Grid>
    </div>
  )
}

export default Home
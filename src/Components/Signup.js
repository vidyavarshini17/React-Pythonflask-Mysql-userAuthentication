import React, { useState } from 'react'
import { TextField,Button, Typography,Grid,Box,Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    padding:12px;
    padding-left:40px;
    padding-right:40px;
    text-align: center;
    `;
function Signup() {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [status,setStatus]=useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });
    
          const data = await response.json();
          setStatus(data.message);
        } 
        catch (error) {
          console.error('Error during signup:', error);
        }
      };

  return (
    <Grid sx={{mt:'8%'}} container direction="column" alignItems="center" justify="center">
    <Typography variant='h6' color={'#ffffff'}
            sx={{backgroundColor:'#1976d2',textAlign:'center',pt:'10px',pb:'10px',pl:'4%',pr:'4%',
            fontWeight:'light',m:1}}>Create a new account</Typography>
    <Paper variant="elevation" elevation={20}>
        <StyledBox sx={{pt:'20px'}}>
            <TextField type="text" label="Username" required onChange={(e) => setUsername(e.target.value)} name="username" />
        </StyledBox>
        <StyledBox>
            <TextField type="password" required label="Password" onChange={(e) => setPassword(e.target.value)} name="password" />
        </StyledBox>
        <StyledBox sx={{pb:'20px'}}>
            <Button variant="contained" onClick={handleSignup}>Signup</Button>
        </StyledBox>
        {status &&
        <StyledBox sx={{pb:'30px',display:'flex',flexDirection:'column'}}>
            <Typography >Account created successfully!</Typography>
            <Button sx={{p:'0px',ml:'0px',mt:'1px'}} size="large" variant="standard" onClick={() => navigate('/')}>Login</Button>
        </StyledBox>
        }
    </Paper>
    </Grid>
  )
}

export default Signup
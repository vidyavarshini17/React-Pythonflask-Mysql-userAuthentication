import React, { useState } from 'react'
import { TextField,Button, Typography,Grid,Box,Paper, Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const StyledBox = styled(Box)`
    padding:12px;
    padding-left:40px;
    padding-right:40px;
    text-align: center;
`;
function Login() {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin=async ()=>{
        try {
            const response = await fetch('http://127.0.0.1:5000/checkUser', {
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
            if(data.message===true){
              navigate('/home');
            }
            else{
              setError('Invalid username or password');
            }
          } 
          catch (error) {
            console.error('Error during login:', error);
            setError('Error during login');
          }
        };

  return (
    <Grid sx={{mt:'6%'}} container direction="column" alignItems="center" justify="center">
    <Typography variant='h6' color={'#ffffff'}
            sx={{backgroundColor:'#1976d2',textAlign:'center',pt:'10px',pb:'10px',pl:'4.8%',pr:'4.8%',
            fontWeight:'light',m:1}}>Login to your account</Typography>
    <Paper variant="elevation" elevation={20}>
        <StyledBox sx={{pt:'30px'}}>
            <TextField type="text" required label="Username" onChange={(e) => setUsername(e.target.value)} name="username" />
        </StyledBox>
        <StyledBox>
            <TextField type="password" required label="Password" onChange={(e) => setPassword(e.target.value)} name="password" />
        </StyledBox>
        <StyledBox>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </StyledBox>
        <StyledBox sx={{pb:'30px',display:'flex',flexDirection:'row'}}>
            <Typography >Don't have an account?</Typography>
            <Button sx={{p:'0px',ml:'2px',mt:'1px'}} variant="standard" onClick={() => navigate('/signup')}>Signup</Button>
        </StyledBox>
    </Paper>
    {error && (
        <Alert sx={{mt:'2%'}} severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
    </Grid>
  )
}

export default Login;
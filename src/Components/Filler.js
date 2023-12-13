import React,{useState} from 'react'

function Filler() {
  let initial={username:"ABC",password:"123"};
  const [user,setUser]=useState(initial);

  const handleUsername = (event) => {
    let u_value = event.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      username: u_value,
    }));
    console.log(user);
  }

  const handlePassword = (event) => {
    let p_value = event.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      password: p_value,
    }));
    console.log(user);
  }

  return (
    <div>
      <input value={user.username} onChange={e=>{handleUsername(e)}}/>
      <input value={user.password} onChange={e=>{handlePassword(e)}}/>
    </div>
  );
}

export default Filler;

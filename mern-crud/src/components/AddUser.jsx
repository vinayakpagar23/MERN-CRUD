import React, {useState} from 'react'
import { FormControl, FormGroup, InputLabel ,Input, Typography,styled, Button} from '@mui/material';
// import { useState } from 'react';

const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div {
    margin-top:20px;
}
`

let defaultUser ={
    name:"",
    username:"",
    email:"",
    phone:""
}
const AddUser = () => {
    const[user,setUser] = useState(defaultUser)
    const onValueChnage=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user);
    }

    const addUserDetails=()=>{}

    
  return (
    <>
    <Container>
    <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChnage(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onValueChnage(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChnage(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValueChnage(e)} name="phone"/>
        </FormControl>
        <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails}>AddUser</Button>
        </FormControl>
    </Container>
    </>
  )
}

export default AddUser
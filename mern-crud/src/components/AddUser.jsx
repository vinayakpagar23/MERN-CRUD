import React from 'react'
import { FormControl, FormGroup, InputLabel ,Input} from '@mui/material';
const AddUser = () => {
  return (
    <>
    <FormGroup>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input/>
        </FormControl>
    </FormGroup>
    </>
  )
}

export default AddUser
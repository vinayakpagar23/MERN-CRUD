import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header =styled(AppBar)`
position:static;
background:#111111;
`

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`
const Navbar = () => {
  return (
    <>
    <Header >
        <Toolbar>
            <Tabs to="/">CRUD OPERATION</Tabs>
            <Tabs to="/all">AllUser</Tabs>
            <Tabs to="/add">AddUser</Tabs>
        </Toolbar>
    </Header>
    </>
  )
}

export default Navbar
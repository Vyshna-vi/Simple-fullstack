import React, { useRef } from 'react'
import './signup.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const navigate = useNavigate()

    const usersignname = useRef()
    const usersignemail = useRef()
    const usersignpassword = useRef()
    const usersignconfirmpassword = useRef()


    async function submit() {

        if (usersignpassword.current.value == usersignconfirmpassword.current.value) {
            let user = {
                user_name: usersignname.current.value,
                email: usersignemail.current.value,
                password: usersignpassword.current.value
            }

            const res = await axios.post("http://localhost:5000/add-user", user)
            console.log(res);
            if (res.data.sucess == true) {
                navigate("/login")
            } else {
                alert(res.data.message)
            }
        } else {
            alert("Wrong Password")
        }
    }

    function login() {
        navigate("/login")
    }

    return (
        <Box className='boxsignup'>
            <h1 className='hcom signhead'>Sign Up</h1>
            <TextField id="standard-basic" label="Username" className='username' variant="standard" inputRef={usersignname} />
            <TextField id="standard-basic" label="Email" className='email' variant="standard" inputRef={usersignemail} />
            <TextField id="standard-basic" label="Password" className='password' variant="standard" inputRef={usersignpassword} />
            <TextField id="standard-basic" label="Confirm Password" className='confirmpass' variant="standard" inputRef={usersignconfirmpassword} />
            <div className='btnsignin'>
                <Button variant="contained" onClick={submit}>Submit</Button>
                <Button variant="contained" className='loginbtn' onClick={login}>Login</Button>
            </div>
        </Box>
    )
}

export default Signup
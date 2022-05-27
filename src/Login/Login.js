import React, { useState } from "react";
import './Login.css';
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'

export var user123 = { user123: "" };
export default function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:11142/api/UserLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bypass-Tunnel-Reminder': 'true'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        if (token === "token123") {
            setToken(token);
            localStorage.setItem('username', username)

        }
    }



    return (

        <div className="container px-4 py-5 mx-auto LOGIN">
            <div className="cardlogin cardlogin0">
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="cardlogin cardlogin1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                                <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/HTqt8Gi.png" alt="logo" /> </div>
                                <div className="row justify-content-center px-3 mb-3"> </div>
                                <h6 className="msg-info">Please login to your account</h6>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="User Name" className="form-control field" onChange={e => setUserName(e.target.value)} /> </div>
                                    <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control field" onChange={e => setPassword(e.target.value)} /> </div>
                                    <div className="row justify-content-center my-3 px-3">

                                        <button type="submit" className="btn-block btn-color" >Login
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="bottom text-center mb-5">

                        </div>
                    </div>
                    <div className="cardlogin cardlogin2">
                        <div className="my-auto mx-md-5 px-md-5 rightlogin">
                            <h3 className="text-white">Home Electronics</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
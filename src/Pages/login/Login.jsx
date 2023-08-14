import React from 'react';
import "./login.css";
import ButtonComponent from "../../components/button-component/ButtonComponent"
import InputComponent from '../../components/inputComponent/InputComponent';

const Login = () => {
    return (
        <div>
            <div className="form">
                <h1 className="title">Signin to your PopX account</h1>
                <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <div className="input-group">
                    <InputComponent label={"Email Address"} placeholder="Enter email address" type="email"/>
                    <InputComponent label={"Password"} placeholder="Enter password" type="password"/>
                </div>
                <ButtonComponent bgColor="primary" content="login" path="profile"/>
            </div>
        </div>
    )
}

export default Login
import React from 'react';
import "./registration.css"
import InputComponent from '../../components/inputComponent/InputComponent'
import ButtonComponent from '../../components/button-component/ButtonComponent'

const Registration = () => {
    return (
        <div>
            <div className="registration-form">
                <div>
                    <h1 className="title">Create your PopX account</h1>
                    <div className="input-group">
                        <InputComponent label={"Full Name"} placeholder="Marry Doe" span="*" type={"text"} />
                        <InputComponent label={"Phone Number"} placeholder="Marry Doe" span="*" type={"number"} />
                        <InputComponent label={"Email Address"} placeholder="Marry Doe" span="*" type={"email"} />
                        <InputComponent label={"Password "} placeholder="Marry Doe" span="*" type={"password"} />
                        <InputComponent label={"Company name"} placeholder="Marry Doe" span="" type={"text"} />
                        <div className="radio-button-group">
                            <p>Are you an Agency?<span>*</span></p>
                            <div className="radio-button">
                                <label htmlFor="">
                                    <input type="radio" value="yes" name='option' />
                                    Yes
                                </label>
                                <label htmlFor="">
                                    <input type="radio" value="no" name='option' />
                                    No
                                </label></div>
                        </div>
                    </div>
                </div>
                <ButtonComponent bgColor="primary" content="Create Account" path="login"/>
            </div>
        </div>
    )
}

export default Registration
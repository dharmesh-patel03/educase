import React from 'react'
import "./home.css"
import ButtonComponent from '../../components/button-component/ButtonComponent'
const Home = () => {
    return (
        <div className="home">
            <div className='home-container'>
                <h1 className='title'>Welcome to PopX</h1>
                <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <div className="button-group">
                    <ButtonComponent content="Create Account" bgColor="primary" path="register"/>
                    <ButtonComponent content="Already Registered? Login" bgColor="secondary" path="login"/>
                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import "./account.css";
import avatar from "../../assets/images/Ellipse 114.png";
import camera from "../../assets/images/Group 1585.png";

const Account = () => {
    return (
        <div className="account-container">
            <div className='heading'>
                <h3 >Account Settings</h3>
            </div>
            <div className="profile-page">
                <div className="profile">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                        <img src={camera} alt="" className='camera-icon' />
                    </div>
                    <div className="profile-name">
                        <h4 className="name">Marry Doe</h4>
                        <p className="email">Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="content">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
            <div className="dash-line"></div>
        </div>
    )
}

export default Account
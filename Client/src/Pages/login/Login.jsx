import { useState } from 'react';
import Log from '../../Components/log/Log';
import Sign from '../../Components/sign/sign';
import './login.css';

export default function Login() {
    const logi = window.location.href.indexOf("login") !== -1;

    // let loginContainer = document.getElementsByClassName("loginContainer");
    // let loginBox = document.getElementsByClassName("loginBox");
    // if (logi) {
    //     loginContainer.style.animation = "switchReverse 1s ease-in-out 1"
    //     loginBox.style.animation = "switch 1s ease-in-out 1"
    //     setTimeout(() => {
    //         loginContainer.style.left = "0";
    //         loginBox.style.left = "50%";
    //     }, 1000);
    // }
    // else {
    //     loginContainer.style.animation = "switch 1s ease-in-out 1"
    //     loginBox.style.animation = "switchReverse 1s ease-in-out 1"
    //     setTimeout(() => {
    //         loginContainer.style.left = "50%";
    //         loginBox.style.left = "0";
    //     }, 1000);
    // }

    return (
        <div className='loginWrapper'>
            <div className='loginContainer'>
                <img src={"https://img.freepik.com/premium-vector/indian-farmer-with-crops-hand-illustration_635702-11.jpg?w=2000"} alt="" />
                <div className='loginBox'>
                    {logi ? <Log /> : <Sign />}
                </div>
            </div>
        </div>
    )
}

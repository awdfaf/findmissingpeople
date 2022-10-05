import React, { Fragment } from 'react'
import { auth } from '../fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import Test from '../Test';

const Loginpage = () => {

    const [userData, setUserData] = useState(null);

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
        .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data) // console로 들어온 데이터 표시
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            
            <div>
                <h1>회원가입</h1>
                <div> email : <input type="email" id="signUpEmail" /> </div>
                <div> password : <input type="password" id="signUpPassword" /> </div>
                <button type="submit" id="signUpButton" >회원가입 하기</button>
            </div>
            <Fragment>
                <h1>로그인</h1>
                <div> email : <input type="email" id="signInEmail" /> </div>
                <div> password : <input type="password" id="signInPassword" /> </div>
                <button type="submit" id="signInButton" >로그인 하기</button>
            </Fragment>
            <Fragment></Fragment>
            <div>
                <h1>구글로 로그인</h1>
                <button onClick={handleGoogleLogin}>Login</button>
                {userData ? userData.displayName : null}
            </div>
        </>
    )
}

export default Loginpage
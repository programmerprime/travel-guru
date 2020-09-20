import React, { useContext } from 'react';
import { userContext } from '../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {



    const [user, setUser] = useContext(userContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const facebookProvider = new firebase.auth.FacebookAuthProvider();


    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {

                let { displayName, email } = result.user;


                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    success: true
                }

                setUser(signedInUser);
                

            })
            .catch(error => {

                console.log(error);
                console.log(error.message);

            });

    }


    const handleFacebookSignIn = () => {

        firebase.auth().signInWithPopup(facebookProvider)
            .then(result => {

                console.log(result);

                let { displayName, email } = result.user;


                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    success: true
                }

                setUser(signedInUser);


            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            });

    }







    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+./.test(e.target.value);
        }

        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length >= 8;
            const passwordContainsNumber = /\d{2}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordContainsNumber;
        }

        if (isFieldValid) {
            const newUser = { ...user };

            newUser[e.target.name] = e.target.value;

            setUser(newUser);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.email && user.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    console.log(res);

                    const {displayName} = res.user;

                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    newUserInfo.name = displayName;

                    setUser(newUserInfo);

                    console.log('user logged in successfully');

                })
                .catch((error) => {
                    let newUserInfo = { ...user };

                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    console.log(error.message);

                    setUser(newUserInfo);
                });
        }


    }




    return (
            <div className="login">

                {
                    user.name ? (<h4>Login successful, go to <Link to="/">Home</Link></h4>) : 
                    (<h4>Enter email and password</h4>)
                }
                
                <div className="input__form">

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            onBlur={handleBlur}
                            required
                        />
                        <br />

                        <label htmlFor="password">Password ( at least eight characters and must contain two digits )</label><br />
                        <input
                            type="password"
                            name="password"
                            placeholder="at least eight characters and two digit"
                            title="at least eight characters and must contain two digits"
                            onBlur={handleBlur}
                            required
                        />

                        <br /><br />
                        <button className="submit-btn" type="submit">Login</button>

                    </form>

                </div>


                <button className="googlebutton" onClick={handleGoogleSignIn}>Sign In With Google</button><br />
                <button className="facebookbutton" onClick={handleFacebookSignIn}>Sign In With Facebook</button>

            </div>
    );
};

export default Login;
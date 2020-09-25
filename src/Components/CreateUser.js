import React, { useContext, useState } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './CreateUser.css';




const CreateUser = () => {



    const [user, setUser] = useContext(userContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const facebookProvider = new firebase.auth.FacebookAuthProvider();

        let history = useHistory();   // for private route
        let location = useLocation(); // for private route

        let { from } = location.state || { from: { pathname: "/" } };  // for private route

       

    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
            
                    let {displayName, email} = result.user;
                    console.log(email);

                    const signedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        email: email
                    }

                    setUser(signedInUser);
                    history.replace(from);

            })
            .catch(error => {

                    console.log(error);
                    console.log(error.message);

            });

    }


    const handleFacebookSignIn = () => {

        firebase.auth().signInWithPopup(facebookProvider)
        .then(result => {
           
            let {displayName, email} = result.user;

            console.log(result.user);

            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true
            }

            setUser(signedInUser);
            history.replace(from);
           
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
              .createUserWithEmailAndPassword(user.email, user.password)
              .then(() => {
                const newUserInfo = { ...user };
                newUserInfo.error = "";
                newUserInfo.success = true;
               
                setUser(newUserInfo);
      
                updateUserInfo(user.name);

                history.replace(from);
                
                console.log('user created successfully');
      
              })
              .catch((error) => {
                let newUserInfo = { ...user };
      
                newUserInfo.error = error.message;
                
                setUser(newUserInfo);
              });
          }
      
      
        const updateUserInfo = (name) => {
          var user = firebase.auth().currentUser;
      
          user
            .updateProfile({
              displayName: name,
            })
            .then(function () {
              console.log("name updated");
            })
            .catch(function (error) {
              console.log(error);
            });
        };
      
    };

   

    return (
        <div>
            
            

            <div className="input__form">

                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Full name</label><br/>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        onBlur={handleBlur}
                        required
                    />
                    <br/>

                    <label htmlFor="email">Email</label><br/>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        onBlur={handleBlur}
                        required
                    />
                    <br/>

                    <label htmlFor="password">Password ( at least eight characters and must contain two digits )</label><br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="at least eight characters and two digit"
                        title="at least eight characters and must contain two digits"
                        onBlur={handleBlur}
                        required
                    />
                   
                    <br/><br/>
                    <button className="submit-btn" type="submit">Sign Up</button>

                </form>
                <p>Already have an account? <Link to={`/login`}>Log in instead</Link></p>

            </div>


            <button className="googlebutton" onClick={handleGoogleSignIn}>Sign In With Google</button><br/>
            <button className="facebookbutton" onClick={handleFacebookSignIn}>Sign In With Facebook</button>

        </div>
    );
};

export default CreateUser;
import React, { useContext } from 'react';
import './Header.css';
import logo from '../Icon/Logo.png';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { userContext } from '../App';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {

    const [user, setUser] = useContext(userContext);

    const handleSignOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            const signedOutUser = {
              isSignedIn: false,
              name: "",
              email: "",
              photo: ""
            };
    
            setUser(signedOutUser);
            console.log("signed out successfully");
          })
          .catch((err) => console.log(err));
      };

    return (
        <>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} style={{ height: '40px' }} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form inline>
                        <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 ml-sm-5" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="ml-auto mr-sm-5">
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#destination">Destination</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {
                            user.success ? (<div>
                                <p>{user.name}</p>
                                <Nav.Link onClick={handleSignOut} className="btn btn-warning">Logout</Nav.Link>
                            </div>) : (
                                <Nav.Link href="/login" className="btn btn-warning">Login</Nav.Link>
                            )
                        }

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default Header;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';

const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef([])
    const passRef = useRef([])
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container mx-auto w-25 mt-5'>
            <Form onSubmit={handleSubmit}>
            <h2 className='text-primary'>PleaseLogin</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label  className='float-start'>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label  className='float-start'>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Link to='/register' onClick={navigateRegister}>Create a new account</Link>
        </div>
    );
};

export default Login;
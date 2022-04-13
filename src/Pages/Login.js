import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import SocialLogin from './SocialLogin';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    let errorElement;

    if (error) {
        errorElement = 
          <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>

      }

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

    const navigateResetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='container mx-auto w-25 mt-5'>
            <Form onSubmit={handleSubmit}>
            <h2 className='text-primary'>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}
                <Button className='w-50 mx-auto my-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>Are you new? <Link to='/register' onClick={navigateRegister}>Create a new account</Link></p>
            <p>Forget Password? <Link to='/register' onClick={navigateResetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
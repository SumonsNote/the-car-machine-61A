import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from './Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    if(loading || updating) {
        return <Loading></Loading>
    }
    
    const handleRegister = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;

        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ displayName: name });
          alert('Updated profile');
          navigate('/home')
    }
    return (
        <div className='container mx-auto w-25 mt-5'>
            <Form onSubmit={handleRegister}>
            <h2 className='text-primary'>Please Register</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" name='name' placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <div className='float-start'>
                <input onClick={() => setAgree(!agree)} style={{marginRight: '5px'}} type="checkbox" name="terms" id="terms"/>
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and condition</label>
                </div>
                <Button disabled={!agree} className='w-50 mx-auto mt-2' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='py-3'>Already have an account? <Link to='/login' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
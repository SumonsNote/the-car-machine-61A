import React from 'react';
import google from '../images/google.png'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement;

    if (error || error1) {
        errorElement = 
          <div>
            <p className='text-danger'>Error: {error?.message} {error1.message}</p>
          </div>

      }

      if(loading || loading1) {
        return <Loading></Loading>
    }

      if(user || user1) {
          navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center py-2'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <div className='px-2'>or</div>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary my-3 w-75'>
                    <img className='mx-2' style={{width: '30px'}} src={google} alt=""/>
                    <span>Continue With Google</span>
                </button>
                <button className='btn btn-primary my-3 w-75'>
                    <img className='mx-2' style={{width: '30px'}} src={facebook} alt=""/>
                    <span>Continue With Facebook</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary my-3 w-75'>
                    <img className='mx-2' style={{width: '30px'}} src={github} alt=""/>
                    <span>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
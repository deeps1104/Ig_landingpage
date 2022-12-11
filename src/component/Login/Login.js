import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import Iglogo from '../assets/Ig_Logo-2.png'
import './Login.css'
const Login = () => {
  return (
    <div className='login-form-wrapper'>
      <div className='login-form'>
        <img src={Iglogo} alt="Instagram-Logo" />
        <p className='logo-content'>Login in to see Photos and Videos from your Friends </p>
        <form >
          <input type="text" placeholder='Useranme' />
          <input type="password" placeholder='Password' />
          <button className='login-btn'>LOGIN</button>
        </form>
        <div  className='forget-details'>Forget Your Login Details ? <span>Get Help Signing in</span>
        </div>
        <span className='Or'>OR</span>
        <button className='fb-button'> <i><FaFacebookF />
        </i>LOGIN IN WITH FACEBOOK</button>
      </div>
      <div className='sign-up'>Don't have an account? <span>Sign up</span></div>  
    </div>
  )
}
export default Login
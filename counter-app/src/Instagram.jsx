import { useState } from 'react';
import './Instagram.css'
import Logo from '../src/Logo/instagramlogo.png'


function Instagram() {
  const [login,setlogin]=useState(true)
  return (
      <div className='Instagram_wrapper'>
         {
          (login)?<div className='Login_wrapper'>
            <img  src={Logo}alt=''/>
            <input placeholder='Mobile Numer or email'/>
            <input placeholder='password'/>
            <button>SignIn</button>
            <span>Don't have an account?</span>
            <span onClick={()=>setlogin(!login)} id='signup'>Signup</span>

          </div>: 
          
          <div className='SignUp-wrapper'>
            <img  src={Logo}alt=''/>
            <input placeholder='Name'/>
            <input placeholder='MobileNumer or email'/>
            <input placeholder='UserName'/>
            <input placeholder='Password'/>
            <button >SignUp</button>
           
          
            <span>Have an Account?</span>
            <span onClick={()=>setlogin(!login)} id='login'>Login</span>
          
          </div>
   
         }
        
         

      </div>
  );
}
export default Instagram;

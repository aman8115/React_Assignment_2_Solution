import { useState } from 'react';
import './Instagram.css'


function Instagram() {
  const [login,setlogin]=useState(true)

  
  return (
      <div className='Instagram_wrapper'>
         {
          (login)?<div className='Login_wrapper'>
            <input placeholder='Mobile Numer or email'/>
            <input placeholder='password'/>
            <button>SignIn</button>
            <span>Don't have an account?</span>
            <span onClick={()=>setlogin(!login)} id='signup'>Signup</span>

          </div>: 
          
          <div className='SignUp-wrapper'>
            <input placeholder='Name'/>
            <input placeholder='MobileNumer or email'/>
            <input placeholder='Password'/>
            <button>SignUp</button>
            <span>Have an Account?</span>
            <span onClick={()=>setlogin(!login)} id='login'>Login</span>
          
          </div>
   
         }
        
         

      </div>
  );
}
export default Instagram;

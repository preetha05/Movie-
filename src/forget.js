import videoBg from './song.mp4';
import React from 'react';
import { Link } from 'react-router-dom';

import './forget.css';
function Forgott(){
    return(
        <div className='main'>
      <div className='overlay'>
     <video src={videoBg} autoPlay loop muted/>
      <div class="wrapper1">
               <div class="title-login">
          <h3>   FORGOT PASSWORD</h3><br/>
               </div>
               <div class="rep">
                <div class="registered email"><br/>
                    Enter your registered email to reset your password
                </div>
               </div>
<div class="container">
<div class="form-inner">
    <form  class="login">
        <div class="field">
            <input type="email" placeholder="Email Address" required>
                </input>
        </div>
        
        <div class="field btn">
            <button className='rest'><Link to='/reset'>Reset Password</Link></button>
                </div>
                <div class="prep">
                    <div class="already acc">
                        <br/>
                        Already have an account?
                    </div>
                </div>
        
                <div class="field btn">
           <button className='Mybutton1'><Link to='/'>Login</Link></button>
                </div>
    </form>
</div>
</div>
</div>
</div>
</div>
    );
    
}
export default Forgott;
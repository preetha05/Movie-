import { Link } from 'react-router-dom';
import videoBg from './assets/song.mp4';
import './signup.css';
function RegisterForm(){
    return (
      <div className='main'>
      <div className='overlay'>
     <video src={videoBg} autoPlay loop muted/>
      <div className='signup'>
        <div className='sign'><br/>
          <h3>Signup with BeatPace</h3><br/>
          <div className='acc1'>
            <input type="email" placeholder="Email Address"></input><br/>
            <input type="password" placeholder="New Password"></input><br/>
            <input type="password" placeholder="Confirm Password"></input><br/><br/>
          </div>
          <div className='sign1'><br/>
            <button className='My'><Link to='/'>Sign up</Link></button>
          </div>
        </div>
      </div>
      </div>
      </div>
      );
  }
export default RegisterForm;
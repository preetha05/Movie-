import './login.css';
import videoBg from './Image/song.mp4';
import {Link} from "react-router-dom";
function Login(){
    return(
      <div className='main'>
        <div className='overlay'>
       <video src={videoBg} autoPlay loop muted/>
      <div className='wrapper'>
      <div className="first">
        <br/>
        <h3>LOGIN  TO BEATPACE</h3><br/><br/>
        <form>
      <div className="first-input">
        <div class="email">
      <input type="email" placeholder="Email Address" />
      </div>
      </div>
      <div className="second-input">
        <div class="email">
      <input type="password" placeholder="Password" ></input>
      </div>
      </div>
      <br/><br/>
      </form>
      <span className='btn'>
      <span className='forget'>
      <Link to='/forget'>Forgot Password ?</Link>
      </span>
      </span>
      <span className='btn-layer'>
      <span className='login' >
<button className='Mybutton'><Link to='/MainPage'>Login</Link></button>
      </span>
      </span><br/><br/>
      <div className='account'>
        <h4>I don't have an account yet</h4>
      </div><br/>
      <div className='create'>
        <div className='acc'>
          <button className="Mybutton"><Link to ='/signup'>Create an account</Link></button>
        </div>
        </div>
</div>
        </div>
        </div>
      </div>
    )
}
export default Login;
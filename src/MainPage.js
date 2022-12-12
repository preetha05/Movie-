import Script from './script.js';
import img from './images/gv prakash.jpg';
import img1 from './images/shreya.jpg';
import img2 from './images/ar rahman.jpg';
import img3 from './images/yuvan.jpg';
import img4 from './images/gv song.jpg';
import img5 from './images/sk.jpg';
import img6 from './images/simbu.jpg';
import img7 from './images/believer.jpg';
import img8 from './images/selena.jpg';
import img9 from './images/savage.jpg';
import {Link} from 'react-router-dom';
import videoBg from './assets/song.mp4';
import './MainPage.css';
function MainPage(){
    return(
        <div className='main'>
        <div className='overlay'>
       <video src={videoBg} autoPlay loop muted/>
        <div className="flexbox-container">
            <div className="flexbox-item flexbox-item-1">
            <h2>BEATPACE</h2>
               <div className='hi'>
              <b> &nbsp; <h4>Home</h4></b>
               <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Artists you may like</p>
               <div className='artist'>
                    <img src={img} height="100" width="130" alt="text"></img><br/>
                    <button className='hp'><Link to='/login'>G V Prakash</Link></button>
                    <img src={img1} height="100" width="130" alt="text"></img><br/>
                    <button className='hp'><Link to=''>Shreya Goshal</Link></button>
                    <img src={img2} height="100" width="130" alt="text"></img><br/>
                    <button className='hp'><Link to=''>A R Rahman</Link></button>
                    <img src={img3} height="100" width="130" alt="text"></img>
                    <button className='hp'><Link to=''>Yuvan Shankar Raja</Link></button>
             </div>
                </div>
            </div>
            <div className="flexbox-item flexbox-item-2">
               
                <div className='mrg'>
                    <br/>
            <Script/>
            </div>
            <div className='pro'>
              <button className='profile' ><Link to='/'>Profile</Link></button>
              </div>
              <div className='good'>
                <div className="song">
               <Link to='/login'><img src={img4} height="150" width="150" alt="text"></img></Link>
               <h4>Artists:G V PRAKASH</h4>
               <h4>SONG :Sandalee</h4>
               <h4>MOVIE :Sema</h4>
              </div>
               <div className='gv'>
              <Link to='/login'> <img src={img5} height="150" width="150" alt="text"></img></Link>
              <h4>Artists:SHREYA GOSHAL</h4>
               <h4>SONG :Ennada Ennada</h4>
               <h4>MOVIE :Varuthapadadha Valibar Sangam</h4>
               </div>
            </div>
            <div className='ar'>
                <div className='shree'>
          <Link to='/login'>  <img src={img6} height="200" width="150" alt="text"></img></Link>
          ARTISTS A R RAHMAN<br/>
          SONG:RASAALI RASAALI <br/>
          MOVIE :ACHCHAM YENBADHU MADAMAIYADA
                </div>
                <div className='bel'>
                    <Link to='/login'><img src={img7} height="200" width="150" alt="text"></img></Link>
                    ARTISTS:DAN REYNOLDS<br/>
                    SONG BELIEVER<br/>
                    BAND IMAGINE DRAGONS
                </div>
                <div className='who'>
                    <Link to='/login'><img src={img8} height="200" width="150" alt="text"></img></Link>
                    Artists:SELENA GOMEZ<br/>
                    WHO SAYS <br/>
                    BAND SELENA GOMEZ & THE SCENE
                </div>
                <div className='bts'>
                    <Link to='/login'><img src={img9} height="200" width="150" alt="text"></img></Link>
                    Artists:JASON DERULO<br/>
                    SONG SAVAGE LOVE<br/>
                    LAXED-SIREN BEAT BTS REMIX
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        );
    }
    export default MainPage;
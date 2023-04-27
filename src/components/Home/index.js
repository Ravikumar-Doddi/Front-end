import homeImg from '../../Assets/Pickup_Illustration.png'
import phone from '../../Assets/picku service.png';
import Axios from 'axios';
import {IoIosCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'
import {ImFacebook,ImTwitter,ImYoutube,ImLinkedin} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';

import './index.css';
import { useState } from 'react';

const Home = () =>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const register = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:8005/register",{userName:name,userMail:email}).then((response) =>{
            console.log(response);
        })

        e.target.reset();
        
    }

    return (
       
        <div className='d-flex flex-column'>
        <div className="home-cont d-flex justify-content-center align-items-center">
        <div className='d-flex flex-column justify-content-between '>
        <div>
        <h1>Vehicle Maintnance <br/> From The Comfort of <br/> Your House</h1>
        <p>Open Auto Smoothes the hassels of maintaining your vehicle and helps you deal with unexpected repairs worry-free</p>
        </div>
        <form className='d-flex flex-column' onSubmit={register}>
        <input className='input-item mb-4' type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name'/>
        <input className='input-item mb-4 ' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email'/>
        <button className='input-item mb-4 ' type='submit'>Submit</button>
        </form>
       </div>
       <img className='image-ratio' src={homeImg} alt=''/>
       
      </div>
      <div className='align-self-end'> <ImFacebook className='social-media m-2'/> <ImTwitter className='social-media m-2'/> <ImYoutube className='social-media m-2'/> <ImLinkedin className='social-media m-2'/> <BsInstagram className='social-media m-2'/></div>
        
      <hr/>

      <div className='p-3'>

      <div className='home-cont2'>
      <img src={phone} alt='phone' className='phone-img'/>
      <div className='details'>
       <h1>Focused on <br/> Time saving</h1>
        <p>Lorum Ipsum is simpily dummy text of the printing and typesetting industry.Lorem Ipsum has been the industury standard dummy text ever since the 1500s when an unknown printer took a gully of type and scramble it to make a type specimen book.It has survived not only five centuries,but also the leap into electronic typesetting,remaining essentilly unchanged .It was</p>
        <button className='input-item'>Download the mobile app</button>
        </div>

      </div>
      <hr/>

      <div className='d-flex justify-content-between' ><h2>Open Auto</h2> 
      <div className='d-flex justify-content-around icons'> 
      <div className='d-flex'><IoIosCall className='call-icon'/><h6>+769 586 4558</h6></div>
       <div className='d-flex'><CiMail className='call-icon'/><h6 className='service'>service@openauto.ca</h6> </div>
       </div>
       </div>
       <div className='d-flex justify-content-between'>
       <p>Open Auto @ all rights reserved</p>
       <div className='align-self-end'> <ImFacebook className='social-media m-2'/> <ImTwitter className='social-media m-2'/> <ImYoutube className='social-media m-2'/> <ImLinkedin className='social-media m-2'/> <BsInstagram className='social-media m-2'/></div>
       </div>
      </div>

      
      </div>
           
    )
}

export default Home 



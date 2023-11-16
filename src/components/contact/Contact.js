import React, {useRef } from 'react'
import './contact.css'
import facebook from '../../assets/facebook.png'
// import abode from '../../assets/abode.png'
import teamcode from '../../assets/teamcode.png'
import microsoft from '../../assets/microsoft.png'
import facebookicon from '../../assets/facebookicon.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_noaxdgq', 'template_6vpqbil', form.current, 'IDG8GeSkH-JX-PlbL6hxi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur rem est error provident dolor aut minus reprehenderit assumenda eveniet in!
        </p>
        <div className="clientImgs">
            <img src={facebook} alt="" className="clientImg" />
            {/* <img src={abode} alt="" className="clientImg" /> */}
            <img src={microsoft} alt="" className="clientImg" />
            <img src={teamcode} alt="" className="clientImg" />
        </div>
        </div>
        <div id="contact"> 
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail} >
          <input type="text" className="name" placeholder='Your Name' name='your_name'/>
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='send' className="submit">Submit</button>
          <div className="links">
            <img src={facebookicon} alt="faceboook" className="link" />
            <img src={instagram} alt="instagram" className="link" />
            <img src={youtube} alt="youtube" className="link" />
            <img src={linkedin} alt="linkedin" className="link" />
          </div>
        </form>
        </div>
    </section>
  )
}

export default Contact
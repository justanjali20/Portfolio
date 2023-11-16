import React from 'react'
import './intro.css'
import Anjali from '../../assets/Anjali.png'
import {Link} from 'react-scroll'
import hire from '../../assets/hire.png'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span><span className="introText"> I am <span className="introName">Anjali Pandey</span><br />Front-end Developer</span>
        <p className="introPara">i am skilled Front-end Developer
         with experience in creating visually appealing and user
         friendly websites </p>
         <Link><button className="btn"><img id='btnImg' src={hire} alt="hire" />Hire Me</button></Link>
        </div>
        <img src={Anjali} className="bg" />
    </section>
  )
}

export default Intro
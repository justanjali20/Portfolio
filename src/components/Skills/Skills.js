import React from 'react'
import './skill.css'
import desinger from '../../assets/desinger.jpeg'
import Office from '../../assets/Office.jpeg'
import  Framework from '../../assets/Framework.jpg'

function Skills() {
  return (
    <section id='skills'>
      <span className='skillsTitle'>What I do</span>
      <span className="skillDesc">I am skilled and passionate Front-end Developer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for detail i am proficient in HTML, CSS  <br />and Javascript </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={desinger} alt="" className='skillBarImg' />
          <div className="skillBarImg">
            <h2 className='heading'>UI/UX Design</h2>
            <p>Gain an understanding of user interface (UI) and user experience (UX) design principles to create user-friendly and visually appealing websites</p>
          </div>
          </div> <div className="skillBar">
          <img src={Office} alt="" className='skillBarImg' />
          <div className="skillBarImg">
            <h2 id='heading2' className='heading' >HTML/CSS/JAVASCRIPT</h2>
            <p>I am proficient in HTML, CSS and Javascript</p>
          </div>
          </div> 
          <div className="skillBar">
          <img src={Framework} alt="" className='skillBarImg' />
          <div className="skillBarImg">
            <h2 className='heading' >Front-end Frameworks</h2>
            <p>Explore popular front-end frameworks like Bootstrap,React</p>
          </div>
          </div> 

      </div>
    </section>
  )
}

export default Skills
import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/Portfolio1.avif'
import portfolio2 from '../../assets/portfolio2.jpeg'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.jpeg'
import portfolio5 from '../../assets/portfolio5.jpeg'

function  Works() {
  return (
    <section  id='Works' >
    <h2 className="workstitle">My Projects</h2>
    <span className="worksDesc">Dive into a collection of web projects that showcase my expertise in front-end development. From responsive designs to interactive user interfaces, this portfolio reflects my passion for creating captivating online experiences</span>
    <div className="worksImgs">
      <img src={Portfolio1} alt="" className="worksImg" />
      <img src= {portfolio2}alt="" className="worksImg" />
      <img src={portfolio3} alt="" className="worksImg" />
      <img src={portfolio4} alt="" className="worksImg" />
      <img src={portfolio5} alt="" className="worksImg" />
    </div>
    <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works;
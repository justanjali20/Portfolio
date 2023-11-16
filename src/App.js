import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/intro/Intro'
import Skill from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


 function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;
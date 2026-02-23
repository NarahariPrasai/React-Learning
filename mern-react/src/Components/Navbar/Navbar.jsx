import React from 'react'
import "./Navbar.css";

const Navbar = () => {

  const user = "Hari";

  return (
    <div className='maindiv'>
      <img id = "image" src="image1.AVIF" alt="" />
      <h1>Nischal Prasai</h1>
      <p is='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi!</p>
      <button id='btn'>View</button>
    </div>
  )
}

export default Navbar

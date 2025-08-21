import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <a href="/">Portfolio</a>
      <div>
        <ul>
          <li><a href="#about"></a>About</li>
          <li><a href="#experience"></a>Experience</li>
          <li><a href="#projects"></a>Projects</li>
          <li><a href="#contact"></a>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

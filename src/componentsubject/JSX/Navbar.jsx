import React,{useState} from 'react'
import "../CSS/Navbar.css"

const Navbar = () => {
  const [width, setwidth] = useState(0)
  return (<>
    <div>
      <nav className="n-navbar">
      <div className="n-logo">
      <i className="fa-solid fa-om"></i>
      </div>
      <div className="n-hamburger" onClick={()=>{width? setwidth(0): setwidth(85)}}>
      <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
    <div className="n-sidebar" style={{width:`${width}vw`}}>
      <div className="n-side-logo">
        <h1><i className="fa-solid fa-om"></i> Sanskrit</h1>
      </div>
      <div className="n-sidebar-list">
        <ul className="sidebar-menu">
          <li className="slide-menu-item"><i className="fa-solid fa-om"></i>Home</li>
          <li className="slide-menu-item"><i className="fa-solid fa-om"></i>About</li>
          <li className="slide-menu-item"><i className="fa-solid fa-om"></i>History</li>
          <li className="slide-menu-item"><i className="fa-solid fa-om"></i>AI</li>
          <li className="slide-menu-item"><i className="fa-solid fa-om"></i>Team</li>
        </ul>
      </div>
    </div>
    </div>
  </>
  )
}

export default Navbar

export default function Navbar() {

  // note to self: probably replace nav-links as a component
  // and have drop down list as another componenent,
  // site will show based off of screen

  return (
    <nav>
      <img id="logo" src="logoV.png" alt="logo"/>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
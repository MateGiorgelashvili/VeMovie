import './navbar.css'
const Navbar = ()=>{
  return(
    <div id="navbar">
      <h1>VE<span>MOVIE</span>.GE</h1>
      <ul>
        <li id='home'>Home</li>
        <li>Top Movies</li>
        <li>This Summer</li>
        <li>Register</li>
        <li>Log in</li>
      </ul>
    </div>
  )
}

export {Navbar}
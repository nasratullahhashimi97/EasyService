
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        EasyService
      </Link>

      <nav className="nav-links">
        <NavLink to="/find-work">Find Work</NavLink>
        <NavLink to="/saved-jobs">Saved Jobs</NavLink>
        <NavLink to="/find-talent">Find Talent</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/post-job" className="nav-post-job">
  + Post a Job
</Link>
        <Link to="/login" className="nav-login">Log In</Link>
        <Link to="/signup" className="nav-signup">Sign Up</Link>
      </div>
    </header>
  )
}

export default Navbar

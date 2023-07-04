import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} to='/'> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} to='/users'>Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'} to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

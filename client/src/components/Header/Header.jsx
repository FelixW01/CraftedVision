import './Header.css';
import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../../context/CurrentUser';

 function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <nav className="navbar">
    <div>
      <Link className="nav-link" to="/"><img src="images/logo.png" className="logo-img"></img></Link>
    </div>
      {isLoggedIn() ? (
        <>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
          <button type="button" onClick={logoutUser}>Logout</button>
        </>
      ) : (
      <div>
          <Link className="nav-link" to="/login">Login</Link>
      </div>
      )}
    </nav>
  );
 }

 export default Header
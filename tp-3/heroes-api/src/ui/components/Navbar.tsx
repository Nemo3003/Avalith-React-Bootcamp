import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "../../heroes/scss/navbar.css"

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  const onLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
    
  };
  

  return (
    <header className="container">
      <div className="container-logo">
        <Link className="" to="/">
          HEROES APP
        </Link>
      </div>

      <nav
        className="navigation navbar navbar-primary bg-primary"
      >
        <ul className="navbar-brand">
          <li>
            <NavLink to="/index">
              Home
            </NavLink>
            <br />
            <NavLink  to="/search">
              Search
            </NavLink>
          </li>

          <li>
            <h2 className="">{user?.username}</h2>
            <button className="" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

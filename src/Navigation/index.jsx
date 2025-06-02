import { NavLink } from "react-router";

function Nav () {

    return (
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about" end>
            About
          </NavLink>
        </nav>
      </header>   
    )
}

export default Nav;
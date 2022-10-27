import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="100" height="90" />
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/" className="item">
            Home Page
          </Link>
        </li>
        <li>
          <Link to="/identify" className="item">
            Identify
          </Link>
        </li>
        <li>
          <Link to="/fight" className="item">
            Fight
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

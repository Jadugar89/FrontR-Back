import { Link } from "react-router-dom";
import './NavBar.css';
function NavBar() {
  return (
    <div className="topnav">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="games">Games</Link>|{" "}
        <Link to="weather">Weather</Link>|{" "}
        <Link to="info">Info</Link>
      </nav>
    </div>
  );
}
export default NavBar;
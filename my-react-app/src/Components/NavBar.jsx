import {Link} from "react-router-dom";
import './NavBar.css';

export function NavBar() {
    return(
        <div className="navbar">
            <Link className="links" to="/">About</Link>
            <Link className="links" to="/education">Education</Link>
            <Link className="links" to="/career">Career</Link>
            <Link className="links" to="/projects">Projects</Link>
        </div>
    )
}
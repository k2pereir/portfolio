import {Link} from "react-router-dom";

export function NavBar() {
    return(
        <div>
            <Link to="/">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/career">Career</Link>
            <Link to="/projects">Projects</Link>
        </div>
    )
}
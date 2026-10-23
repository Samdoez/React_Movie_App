import {Link} from "react-router-dom";
import "../css/Navbar.css";

function NavBar(){
    return (
        <div class="navbar">
            <div className="navbar-brand">
                <Link to="/">MovieApp</Link> 
            </div>
            <div className="navbar-links">
                <Link to="/"> Home </Link>
                <Link to="/favorites"> Favorites </Link>
            </div>
        </div>
    )
}

export default NavBar;
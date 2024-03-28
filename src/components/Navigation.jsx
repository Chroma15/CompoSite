import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
return (
    <nav className="Navigation">
    <strong><Link to="/">HOME</Link></strong>
    <strong><Link to="/book-a-demo">BOOK A DEMO</Link></strong>
    <strong><Link to="/view-demos">VIEW DEMOS</Link></strong>
    </nav>
);
}

export default Navigation;

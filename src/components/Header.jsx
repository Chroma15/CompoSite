import { Link } from "react-router-dom";
import "./Header.css"
import Navigation from "./Navigation";

function Header() {
    return (
    <header className="Header">
        <div className="Header-logo">
            <strong>
                <Link to="/">
                    <div className="logo">
                        <span className="compo">COMPO</span>
                        <span className="site">SITE</span>
                    </div>
                </Link>
            </strong>
            
        </div>

        <Navigation />
    </header>
    )
}

export default Header;

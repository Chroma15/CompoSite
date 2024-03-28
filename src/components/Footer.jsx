import "./Footer.css"
import { Link } from "react-router-dom";
function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
    <footer className="footer">
        <span>@COMPOSITE {currentYear}</span>
        <ul className="footer-links">
            <li><Link to="/">About us</Link></li> |
            <li><Link to="/">Contact us</Link></li>
        </ul>
    </footer>
    )
}

export default Footer;

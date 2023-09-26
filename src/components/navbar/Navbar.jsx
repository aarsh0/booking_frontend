import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to={"/"} className="navLogo">
                    <span className="navLogo">BookingBuddy</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">Login</button>
                    <button className="navButton">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
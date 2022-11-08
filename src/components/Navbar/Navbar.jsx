import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { list } from '../../lists/NavbarRouteList'

const Navbar = () => {
    const [offset, setOffset] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // console.log(offset);
  return (
    <nav className={`NavbarItems`}>
            <h3
                className={
                    window.location.pathname === "/"
                        ? "navbar-logo-transparent"
                        : "navbar-logo"
                }
            >
                Agri-Spot
            </h3>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Link to="/contact">
            <button>
                <span>Contact</span>
            </button>
            </Link>
        </nav>
  )
}

export default Navbar
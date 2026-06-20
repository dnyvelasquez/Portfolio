import { NavLink } from "react-router-dom";
import logo from "../../Assets/DVShark.svg";

const NavBar = () => {

    return (                    
        <nav className="nav-bar fixed flex items-center z-10 top-0 w-full text-sm font-light border-b border-slate-700 shadow-md">
            <div className="flex items-center justify-self-start w-full">
                <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink to={'/'} className="text-white hover:text-cyan-400 transition-colors">
                            <h1>Daniel Velásquez</h1>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
    
export default NavBar;
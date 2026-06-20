import { NavLink } from "react-router-dom";
import logo from "../../Assets/DVShark.svg";

const NavBar = () => {

    return (                    
        <nav className="nav-bar fixed flex items-center z-10 top-0 w-full text-sm font-light border-b border-slate-700 shadow-md px-4 py-2">
            <div className="flex items-center gap-4 justify-self-start w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img src={logo} alt="logo" className="w-full h-full object-cover scale-125" />
                </div>
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
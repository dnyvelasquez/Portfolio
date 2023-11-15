import { NavLink } from "react-router-dom";
import logo from "../../assets/DVShark.svg";

const NavBar = () => {

    return (                    
        <nav className="nav-bar fixed flex items-center z-10 top-0 w-full text-sm font-light border-b-2 shadow-md">
            <div className="flex justify-self-start w-full">
                <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink to={'/Portfolio/'}>
                            <h1>Daniel Velásquez</h1> 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>                        
    )
}
    
export default NavBar;
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return <div className="flex flex-row  justify-between">
            <NavLink to="/">
            <img  width="15%" height="15%" src="/logo.avif"/>
            </NavLink>
            
            <NavLink to="/">
            <p>Home</p>
            </NavLink>
            <NavLink to="/cart">
            <div>
              <FaShoppingCart className=" "></FaShoppingCart>
            </div>
            </NavLink>
            
  </div>;
};

export default Navbar;

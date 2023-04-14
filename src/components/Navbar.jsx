import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const Navbar = () => {

const currentState = useSelector ( (state)=> state)

const noOfitemAddedTocart = currentState.cart.length;

  return <div className="flex flex-row  justify-between">
            <NavLink to="/">
            <img  width="15%" height="15%" src="/logo.avif"/>
            </NavLink>
            
            <NavLink to="/">
            <p>Home</p>
            </NavLink>


            <NavLink to="/cart">           
            <div>
            <span>{noOfitemAddedTocart}</span>
              <FaShoppingCart >
              </FaShoppingCart>
            </div>
            </NavLink>
            
  </div>;
};

export default Navbar;

import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const Navbar = () => {

const currentState = useSelector ( (state)=> state)

const noOfitemAddedTocart = currentState.cart.length;

  return <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to="/">
            <div className="ml-5">
            <img  className="h-14" src="/logo.avif"/>
             </div>
            </NavLink>

            <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
            <p>Home</p>
            </NavLink>
             </div>
            
            


            <NavLink to="/cart">           
            <div className="relative">
              <FaShoppingCart className="text-2xl  bg-white"  >
              </FaShoppingCart>
              {   noOfitemAddedTocart > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{noOfitemAddedTocart}</span>
                  }
            </div>
            </NavLink>
            
  </div>;
};

export default Navbar;

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {

  //slice fetch karli 
  const {cart} = useSelector( (state)=> state);

  const [totalAmount , setTotalAmount] = useState(0);

  useEffect ( () => {
    setTotalAmount( cart.reduce ( (acc,curr)=> acc+curr.price,0) );
  } , [cart])
 
  return (<div>
    {
      //agar current state m , cart ki length 0 se bdi hai toh mtlb usme , items added hai , map function lgao har ek cart k lie jo har ek item dega
      //aur unn item ko as a prop pass krdo cartItem m , jo show krega item ko 
      cart.length > 0 ? (<div>

     <div>  { cart.map ( (item , index)=>{ return(<CartItem key={item.id} item={item} itemIndex={index }></CartItem>)})} </div>

      <div>
        <div>Your Cart</div>
        <div>Summary</div>
        {/* total item kitn hue hai vo cart ki length se pta chl jaengy */}
        <p><span>Total Items : {cart.length}</span></p>
        <button>
          Checkout Now
        </button>
      </div>

      <div>
        <p>Total Amount : {totalAmount}</p>
      </div>

      </div>) :
       (<div><h1> Cart Empty  <Link to={"/"}> <button>Shop Now</button></Link> </h1></div>)
    }
  </div>);
};

export default Cart;

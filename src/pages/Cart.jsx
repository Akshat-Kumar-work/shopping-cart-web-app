import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector( (state)=> state);
  const {totalAmount , setTotalAmount} = useState(0);
  useEffect ( ()=>{
    setTotalAmount( cart.reduce ( (acc,curr)=> acc+curr.price,0));
  } , [cart])
 
  return (<div>
    {
      cart.length > 0 ? (<div>

     <div>  { cart.map ( (item , index)=>{ return(<CartItem key={item.id} item={item} itemIndex={index }></CartItem>)})} </div>

      <div>
        <div>Your Cart</div>
        <div>Summary</div>
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

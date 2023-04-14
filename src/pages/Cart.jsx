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
 
  return (<div  >
    {
      //agar current state m , cart ki length 0 se bdi hai toh mtlb usme , items added hai , map function lgao har ek cart k lie jo har ek item dega
      //aur unn item ko as a prop pass krdo cartItem m , jo show krega item ko 
      cart.length > 0 ? (<div className="max-w-6xl min-h-[80vh] ">

     <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-2 mx-auto space-y-10 space-x-5 max-w-3xl ">  
     { cart.map ( (item , index)=>{ return(<CartItem key={item.id} item={item} itemIndex={index }></CartItem>)})} </div>


      <div className=" flex flex-col gap-3 items-center justify-center mt-5 rounded-xl max-w-2xl  p-2 mx-auto">
        <div className="" >Your Cart Summary</div> 
        {/* total item kitn hue hai vo cart ki length se pta chl jaengy */}
        <p><span >Total Items : {cart.length}</span></p>
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold  m-6
          text-[12px] p-1 px-3 uppercase  w-[6rem]
          hover:bg-gray-700 
          hover:text-white transition duration-300 ease-in">
          Checkout Now
        </button>

        <div>
        <p className="text-green-600 font-semibold ">Total Amount : {totalAmount}</p>
      </div>
      </div>

      </div>) :

       (<div className="flex justify-center items-center w-16"><h1> Cart Empty  <Link to={"/"}> <button>Shop Now</button></Link> </h1></div>)
    }
  </div>);
};

export default Cart;

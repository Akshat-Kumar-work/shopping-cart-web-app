import {RiDeleteBin6Fill} from "react-icons/ri"
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove} from "../redux/Slices/CartSlice";


const  CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();

  const removefromcart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }
  return (<div>
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-2 mt-5 rounded-xl outline">

      <div className="h-[180px]" >
        <img src={item.image} className="h-full w-full  "></img>
      </div>

      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
        <div>
        <p className="text-green-600 font-semibold">{item.prize}</p>
        </div>
        <div onClick={removefromcart} className="">
        <RiDeleteBin6Fill className=""/>
        </div>
      </div>
    </div>
  </div>);
};

export default CartItem;

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
    <div>

      <div>
        <img src={item.image} ></img>
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.prize}</p>
        </div>
        <div onClick={removefromcart}>
        <RiDeleteBin6Fill/>
        </div>
      </div>
    </div>
  </div>);
};

export default CartItem;

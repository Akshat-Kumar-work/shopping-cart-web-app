import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add , remove} from "../redux/Slices/CartSlice";


const Product = ({post}) => {
//here post is a single post coming from home page as a prop

  //isme har ek post k lie current state ki info lekr ayngy store se , aur store slice se lkr ayga
const {cart} = useSelector((state) => state)


const dispatch = useDispatch();

const addtocart = ()=>{
  //dispatch hook ki help se add function ko lkr aye hai
  dispatch(add(post));
  toast.success('Item added to cart');
}

const removefromcart = ()=>{
  //dispatch hook ki help se remove func ko lkr aye hai
  dispatch( remove(post.id));
  toast.error('Item removed from cart')
}

  return (
  <div>

    <div>
    
      <p>{post.title}</p>
    </div>

    <div>
      <p>{post.description}</p>
    </div>

    <div>
      <img src={post.image}></img>
    </div>

    <div>
      {post.price}
    </div>

{
  //jo bhi post or item hai check karo ki vo cart k andar present hai ki nahi , agar current item hai phle se toh remove button show kro aur agar nai hai toh add button show kro
  cart.some( (p) => p.id == post.id) ? 
  ( <button onClick={removefromcart}> Remove Item </button>) :
   ( <button onClick={addtocart}> Add to Cart </button>)
}
    

  </div>);
};

export default Product;

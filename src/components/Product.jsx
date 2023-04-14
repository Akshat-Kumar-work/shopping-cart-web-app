import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add , remove} from "../redux/Slices/CartSlice";
const Product = ({post}) => {

const {cart} = useSelector((state) => state)

const dispatch = useDispatch();

const addtocart = ()=>{
  dispatch(add(post));
  toast.success('Item added to cart');
}

const removefromcart = ()=>{
  dispatch( remove(post.id));
  toast.success('Item removed from cart')
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
  cart.some( (p) => p.id === (post.id) ? ( <button onClick={removefromcart}>Remove Item</button>) : ( <button onClick={addtocart}>Add to Cart</button>))
}
    

  </div>);
};

export default Product;

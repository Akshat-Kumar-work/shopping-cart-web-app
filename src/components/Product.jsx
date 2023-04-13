const Product = ({post}) => {
  return (<div>

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

    <button>
      {
        Seleced ? (<p>Remove Item</p>) : (<p>Add to Cart</p>)
      }
    </button>

  </div>);
};

export default Product;

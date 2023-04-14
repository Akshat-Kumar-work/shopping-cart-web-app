import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([])


  async function fetchdata (){
    setLoading(true)

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("error hai")
    }
  }

  useEffect( ()=>{
    fetchdata()
  } , [])
  return (<div>
    {
      loading ?  (<Spinner></Spinner>): (posts.length > 0 ? ( <div> {
        posts.map( (post)=>{
        return <Product key={post.id} post={post}/>
      })
      } </div>) : ( <div> <p> no data found</p></div>) )
    }
  </div>);
};

export default Home;

import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([])


  //it set loader true or false and also fetch data from given api
  async function fetchdata (){
    //starting m loading true krdo
    setLoading(true)

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("error hai")
      setPosts([]);
    }
    //jab api fetch hojae th loading ko false krdo
    setLoading(false);
  }

  useEffect( ()=>{
    //fetch data func ko call kro ek hi bar 
    fetchdata()
  } , [])


  return (<div>
  {/* agar data load hora hai toh spinner ko dikhao aur agar data load ho chuka hai toh check karo kya posts ki length 0 se bdi hai?
  agar posts ki length zero se bdi hai toh map krdo har ek post ko product component k sath aur pass karo post ko as a prop */}
    {
      loading ?  (<Spinner></Spinner>): (posts.length > 0 ? ( <div> {
        posts.map( (post)=>{
        return <Product key={post.id} post={post}/> } )  } </div>) : 
        ( <div> <p> no data found</p></div>) )
    
    }
  </div>);
};

export default Home;

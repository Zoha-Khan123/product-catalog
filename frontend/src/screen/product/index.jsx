import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

  const [products,setProducts] = useState([])
  console.log(products);
  
  const backendUrl = import.meta.env.VITE_BACKEND_API_URL 
  console.log("backb",backendUrl);
  
  // Read
  useEffect(()=>{
    fetch(`${backendUrl}/api/products`)
    .then((res)=> res.json())
    .then((data)=> setProducts(data))
    .catch((error)=>console.error("Fetch Error :",error))
  },[])

  // Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${backendUrl}/api/products/${id}`,{
        method : "DELETE"
      })
      if (res.ok) {
        setProducts(products.filter((p)=> p._id !== id) )
      }else{
        console.log("Failed to delete");
      }
    } catch (error) {
      console.log("Error: ",error);
      
    }
  }

  return (
     <div>
      <Link to="/create-form"><button>Create</button></Link>
      {products.map((item) => (
        <div key={item._id}>
          <div>
            <img src={item.image}/>
          </div>
          <div>
            <h1>{item.name}</h1>
            <p>Price:{item.price}</p>
            <p>Quantity:{item.quantity}</p>
            <p>Description:{item.description}</p>
          </div>
          <div>
            <button onClick={()=>handleDelete(item._id)}>Delete</button>
            <button>Update</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
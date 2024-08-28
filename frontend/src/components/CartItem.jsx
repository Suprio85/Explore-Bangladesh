import React, { useEffect } from 'react'
import{useState} from 'react'
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


const CartItem = ({item,cartItems,setCartItems}) => {
 const[counter,setCounter] = useState(item.quantity);


  const[totalprice,setTotalPrice] = useState(item.price * item.quantity);
    const updateCartItem = async (item,action) => {
       let updatedCounter;
        if(action === 'increase'){
         updatedCounter = counter + 1;
        setCounter(updatedCounter);
        }
        if(action === 'decrease'){
         updatedCounter = Math.max(1,counter - 1);
        setCounter(updatedCounter);
        }
        console.log(updatedCounter);

        const updatedPrice = item.price * updatedCounter;
        setTotalPrice(updatedPrice);

      
        const respone = await fetch(`http://localhost:5000/api/cart/${item.tour_package_id}`,{
            method:'PUT',
            headers:{
                 Authorization: `Bearer ${localStorage.token}`,
                  'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                quantity: updatedCounter,
                price: updatedPrice
            })
        })

        const updatedCartItems = cartItems.map((cartItem)=>{
            if(cartItem.tour_package_id === item.tour_package_id){
                return{
                    ...cartItem,
                    quantity: updatedCounter,
                }
            }
            return cartItem;
        })

        setCartItems(updatedCartItems);
        const data = await respone.json();
        console.log(data);
       
    
    }

    const handleClickDelete = async()=>{
      console.log(item);
        const response = await fetch(`http://localhost:5000/api/cart/${item.tour_package_id}`,{
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        const data = await response.json();
        console.log(data);
        const updatedCartItems = cartItems.filter((cartItem)=>cartItem.tour_package_id !== item.tour_package_id);
        setCartItems(updatedCartItems);
        
    }


  return (
      <li
        key={item.id}
        className="mb-4 border-b pb-2 flex justify-between items-center"
      >
        <div className="flex items-center">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <span className="font-semibold">{item.name}</span>
            <div className="text-gray-500">
              ${item.price}
            </div>
            <div className="flex items-center mt-2">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => updateCartItem(item, 'decrease')}
              >
                <FaMinus />
              </button>
              <span className="mx-2">{counter}</span>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => updateCartItem(item, 'increase')}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <span className="font-semibold">
          <span className='text-red-500 flex justify-center items-center
          cursor-pointer hover:text-red-600 transition-colors duration-300'
          onClick={()=>handleClickDelete()}
          >
          <MdDelete size={24}/>
          </span>
          ${totalprice}
        </span>
      </li>
  )
}

export default CartItem
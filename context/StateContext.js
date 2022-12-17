import {createContext, useContext, useState, useEffect} from "react"
import { toast} from "react-hot-toast"
import Cart from '../components/Cart';

export const Context = createContext();


  
 function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(`error`, e);
    }
  }
 
  

  function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }


export const StateContext = ({children}) => {
     const [showCart, setShowCart] = useState(false);
     const [cartItem, setCartItem] = useState(getLocalStorage("cart", []));
     const [totalPrice, setTotalPrice] = useState(getLocalStorage("totalPrice", 0));
     const [totalQuantities, setTotalQuantities] = useState(getLocalStorage("totalQuantities", 0));
    const [qty, setQty] = useState(1);
    
  
      const formatPrice = (price) => {

        let formatCurrency = new Intl.NumberFormat('yo', {
          style: 'currency',
          currency: 'NGN',
        });
        
        return formatCurrency.format(price);
      }


    useEffect(() => {
        setLocalStorage("cart", cartItem);
        setLocalStorage("totalPrice", totalPrice);
        setLocalStorage("totalQuantities", totalQuantities);
      }, [cartItem,totalQuantities,totalPrice]);
  
    const addItem = (product,quantity ) => {
        const inCart = cartItem.find((item) => item._id == product._id)     
        if (inCart) {
            setTotalPrice((prev)  => prev + product.price * quantity );
            setTotalQuantities((prev) => prev + quantity)
           

            const ind = cartItem.indexOf(inCart);
            
            setCartItem(
              cartItem.map(item => 
                  item._id ===  cartItem[ind]._id
                  ? {...item, quantity : cartItem[ind].quantity + quantity} 
                  : item 
          ))
          setQty(1)
          toast.success(`${quantity} ${product.name} added to cart`) 


        } else {
        product.quantity = quantity
        setCartItem([...cartItem, product])
        setTotalPrice((prev)  => prev + product.price * quantity );
        setTotalQuantities((prev) => prev + quantity)
        toast.success(`${product.name} added to cart`) 
        }
        } 
       
      const incQty = () => {
          setQty(prev => prev + 1)
      }
      const decQty = () => {
          setQty(prev =>{ 
              if(prev - 1 < 1) return 1;        
            return prev - 1
          })}


          const handleRemoveItem = (item) => {
            setCartItem(cartItem.filter(items => items._id !== item._id)),
            setTotalPrice(prev => prev - item.price * item.quantity),
            setTotalQuantities((prev) => prev - item.quantity)
      
          };
          const incItemQty = (item) => {
            if(item.quantity >= 0) {
            setCartItem(
              cartItem.map(currentItem => 
                  currentItem._id ===  item._id
                  ? {...currentItem, quantity : item.quantity + 1} 
                  : currentItem 
          ))
            setTotalPrice(prev => prev + parseInt(item.price))
            setTotalQuantities((prev) => prev + 1)

            }  
          }
          
          const decItemQty = (item) => {
            if(item.quantity !== 1) {
          
              setCartItem(
                cartItem.map(currentItem => 
                    currentItem._id ===  item._id
                    ? {...currentItem, quantity : item.quantity - 1} 
                    : currentItem 
            ))
              setTotalPrice(prev => prev - parseInt(item.price))
              setTotalQuantities((prev) => prev - 1)
          }
        }
          
         
      
    return (
        <Context.Provider value={{
            showCart,
            totalPrice, 
            totalQuantities, 
            cartItem,
            addItem,
            qty,
            incQty,
            decQty,
            setCartItem,
            setShowCart,
            setTotalPrice,
            setTotalQuantities,
            formatPrice,
            handleRemoveItem,
            incItemQty,
            decItemQty
        }}>

            {children}
        </Context.Provider>
    )
}

export  const useStateContext = () => useContext(Context)
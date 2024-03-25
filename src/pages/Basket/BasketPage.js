import React from 'react'
import './BasketPage.css'
// import { Title } from '../../components/Title/Title'
import Left from '../../components/img/Left.png'
import {  useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem/CartItem'


export const BasketPage = () => {

  // const [cartBook, setCartBook] = useState([]);
  // const dispatch = useDispatch();
  

  const cart = useSelector(state=>state.books)
  console.log(cart)
  const navigate = useNavigate();



  return (
    
    <div className='bascet'>
      <div className="single-card-title">
          <img src={Left} onClick={() =>  navigate(-1)} ></img>
          <div style={{fontSize: 36}}>YOUR CART</div>
      </div>
      <div className='wrapper'>
      {
         cart?.bascet && cart?.bascet.length > 0 ?(
            
            cart.bascet.map((item) =>{
              console.log(cart.bascet)
              console.log(item );
              return(
                <CartItem 
                   key={item.isbn13}
                     book={item}
                    />
              )
              
              
            })
            
        
        ) : null}
        <ul style={{fontSize: 20, textAlign: 'right'}}>
          <li className='total'>
            <span className='book-info'>Sum Total:</span>
            <span className='book-value'>{(cart.total).toFixed(2)}$</span>
          </li> 
          <li className='total'>
            <span className='book-info'>VAT:</span>
            <span className='book-value'>{(cart.total * 0.23).toFixed(2) }$</span>
          </li> 
          <li className='total'>
            <span className='book-info'>Total:</span>
            <span className='book-value'>{((cart.total + (cart.total * 0.23)).toFixed(2))}$</span>
          </li>  
          <button className='check'>check out</button>                     
        </ul>
      </div>
        
    </div>

    
   
     
   
  )
}


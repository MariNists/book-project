
import React, { useState } from 'react'
import './FavouritePage.css'
import { Title } from '../../components/Title/Title'
import Left from '../../components/img/Left.png'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FavouriteItem } from '../../components/FavouriteItem/FavouriteItem'


export const FavouritePage = () => {

  // const [cartBook, setCartBook] = useState([]);
  // const dispatch = useDispatch();
  

  const cart = useSelector(state=>state.books)
  console.log(cart)
  const navigate = useNavigate();



  return (
    
    <div className='favorite'>
      <div className="single-card-title">
          <img src={Left} onClick={() =>  navigate(-1)} ></img>
          <div style={{fontSize: 36}}>FAVORITES</div>
      </div>
      <div className='wrapper'>
      {
         cart?.favourite && cart?.favourite.length > 0 ?(
            
            cart.favourite.map((item) =>{
              console.log(cart.favourite)
              console.log(item );
              return(
                <FavouriteItem  
                   key={item.isbn13}
                     book={item}
                    />
              )
              
              
            })
            
        
        ) : null}
       
      </div>
        
    </div>

    
   
     
   
  )
}


import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { removeItemFavourite, updateQuantity } from "../../store/booksSlice"
import {fetchSingleBook} from '../../store/booksSlice'
import Rating from "@mui/material/Rating";
import Hearted from '../img/Hearted.png'


import styles from "./FavouriteItem.module.css"
import { useNavigate } from "react-router-dom"

export const FavouriteItem = ({book}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemove = () => {
        dispatch(removeItemFavourite({isbn13: book.isbn13}))
    }
    const OpenBook = (isbn13) => {
        dispatch(fetchSingleBook(isbn13))
        console.log(isbn13)
        navigate('/:id')
      }

    

    return(
         
        <div className={styles.container}>
          
           <div className={styles.cart}>
                <div className={styles.image}>
                    <img src={book.image} alt="" onClick={() =>OpenBook(book.isbn13)} /> 
                </div>
                <div className={styles.title}>
                    <p className={styles.titles}>{book.title}</p>
                    <p className={styles.subtitles}>{book.subtitle}</p>
                    <div className={styles.price}>
                       <p className={styles.prices}>{book.price}</p>
                       <Rating value={book.rating} readOnly />
                    </div>
                </div>
                
            </div> 
            
            <div>
                <div variant="danger" onClick={handleRemove}><img src={Hearted} style={{border:'none'}} /></div>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../../store/booksSlice"
import { useNavigate } from "react-router-dom"
import {fetchSingleBook} from '../../store/booksSlice'


import styles from "./CartItem.module.css"

export const CartItem = ({book}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hr  = +book.price.slice(1)

    const [quantity, setQuantity] = useState(book.quantity)
    const [totalPrice, setTotalPrice] = useState(+hr * +book.quantity)

    const handleRemove = () => {
        dispatch(removeItem({isbn13: book.isbn13}))
    }

    useEffect(() => {
        setTotalPrice( +hr * quantity)
        dispatch(updateQuantity({isbn13: book.isbn13, quantity}))
    }, [quantity, book.price, book.isbn13, dispatch])

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
                        <p className={styles.prices}>{book.price}</p>
                        <div className={styles.change}>
                            <button className={styles.changeBtn} onClick={() => {
                                if (quantity > 1) {
                                setQuantity(pre => pre - 1)
                                }
                            }}>-</button>
                            <p>{quantity}</p>
                            <button className={styles.changeBtn} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                        </div>
                   
                </div> 
                
            </div> 
            <div className={styles.total}>
                <div className={styles.price} >
                        {totalPrice}$
                </div>
                <div>
                    <button className={styles.delBtn} onClick={handleRemove}>x</button>
                </div>
            </div> 
           
           
        </div>
    )
}




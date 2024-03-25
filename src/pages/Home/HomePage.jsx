import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {fetchSingleBook} from '../../store/booksSlice'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import {useDispatch} from 'react-redux'
import { Subscribe } from '../../components/Subscribe/Subscribe'
// import Paginatione from '../../components/Paginatione/Paginatione'
import { Paginatione } from '../../components/Paginatione/Paginatione'
import { Title } from '../../components/Title/Title'



const url = 'https://api.itbook.store/1.0/new'

 export const HomePage = () => {

  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      axios.get(url).then((resp) =>{
        const allbook = resp.data;
        setBooks(allbook.books)
      })
  },[])

const navigate = useNavigate();

const OpenBook = (isbn13) => {
  dispatch(fetchSingleBook(isbn13))
  console.log(isbn13)
  // navigate('/:id')
  navigate(isbn13)
}


// const [currentPage, setCurrentPage] = useState(1);

// const currentTableData = useMemo(() => {
//   const firstPageIndex = (currentPage - 1) * PageSize;
//   const lastPageIndex = firstPageIndex + PageSize;
//   return data.slice(firstPageIndex, lastPageIndex);
// }, [currentPage]);

  return (
    <section className={styles.books}>
    <div className={styles.container}>
    <Title title={'New Releases book'} fz={46}/>
      <div className={styles.list}>
        {
         books.map((book) => {
          const {image, title, subtitle, price, rating, isbn13  } = book
          return (
            <div key={book.isbn13} className={styles.product} onClick={() =>OpenBook(isbn13)}>
            
              <div className={styles.image}>
                <img className={styles.img} src={image} alt='#'></img>
              </div>
            
              <div className={styles.wrapper}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.authors}>{subtitle}</p>
                <p className={styles.price}>{price}</p>
                  
                
            
              </div>  
            </div>
            )
        
          })
        
        }

      
      </div>
    
    </div>
    <Paginatione />
    <Subscribe />
  </section>
  )
}


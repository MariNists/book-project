import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Pagination, Stack } from '@mui/material';
import {fetchSingleBook} from '../../store/booksSlice'
import styles from './SearchBook.module.css'
import { Title } from '../../components/Title/Title'
import {useDispatch, useSelector} from 'react-redux'
import Left from '../../components/img/Left.png'



const BASE_URL = 'https://api.itbook.store/1.0/search/'

export const SearchBook = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const valueInput = useSelector(state => state.books.inputValue)
    //     const dispatch = useDispatch();


    const [posts,setPosts] = useState([]);

    const [page,setPage] = useState(1);    
    const [pageQty, setPageQty ] = useState(0);

    const OpenBook = (isbn13) => {
        dispatch(fetchSingleBook(isbn13))
        console.log(isbn13)
        // navigate('/:id')
        navigate(isbn13)
      }

    useEffect(() =>{
        axios.get(BASE_URL + `query=${valueInput}&page=${page}`).then(
            ({data}) =>{
              console.log(data)
              setPosts(data.books)
              setPageQty(data.total)

              if(data.total < page) {
                setPage(1)
                
              }
            } 
        )
    }, [valueInput, page]);

  return (
    <Container sx={{marginTop: 5}}>
        <img src={Left} onClick={() =>  navigate(-1)} ></img>
        <Stack spacing={2}>
            
            <Title title={`"${valueInput}"` + "search results"} fz={46}/>
            <div className={styles.list}>
           {
            posts.map(post => (
            
               <div key={post.isbn13} className={styles.product} onClick={() =>OpenBook(post.isbn13)}>
            
               <div className={styles.image}>
                 <img className={styles.img} src={post.image} alt='#'></img>
               </div>
             
               <div className={styles.wrapper}>
                 <h4 className={styles.title}>{post.title}</h4>
                 <p className={styles.authors}>{post.subtitle}</p>
                 <div className={styles.prices}>
                   <p className={styles.price}>{post.price}</p>
                   
                 </div>
             
               </div>  
             </div>
            ))
           }  
           </div> 

{!!pageQty && (
            <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            style={{margin: '20px auto'}}    
            // renderItem={
            //   (item) =>(
            //     <PaginationItem
            //       component={NavLink}
            //       to={`/search/page=${item.page}`} 
            //       {...item}/>
            //   )
            // }
            />
           )} 
            
        </Stack>  
        
    </Container>
  )
}

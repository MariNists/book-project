import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Pagination, TextField, Stack, Link } from '@mui/material'
import './paginatione.css'

const BASE_URL = 'https://api.itbook.store/1.0/search/'

export const Paginatione = () => {

    const [posts,setPosts] = useState([]);
    const [query,setQuery] = useState('react');
    const [page,setPage] = useState(1);
    const [pageQty, setPageQty ] = useState(0);

    useEffect(() =>{
        axios.get(BASE_URL + `query=${query}&page=${page -1}`).then(
            ({data}) =>{
              console.log(data)
              setPosts(data.hits)
              setPageQty(data.nbPages)
            } 
        )
    }, [query, page]);

  return (
    <Container>
        {/* <TextField /> */}
        <Stack >
            
            <Pagination  style={{margin: 'auto'}}
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            
            />

            
        </Stack>    
        
    </Container>
  )
}

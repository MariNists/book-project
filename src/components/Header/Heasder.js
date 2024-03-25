import React from 'react'
import { useState } from 'react';
// import SearchForm from '../Form/SearchForm'
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.css'
import Like from '../img/Like.png'
import Basket from '../img/Basket.png'
import User from '../img/User.png'
import Search from '../img/Search.png'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import { Subject } from '../../components/Subject/subject'
import {setInputValue} from '../../store/booksSlice'




//  const Header = () => {
//   const [searchvalue, setSearchValue] = useState("");

   
//   return (
//     <header className='header'>
//       <span>bookstore</span>
//       <form className='form'>
//             <div className='form-input'>
//               <input type='search' name='search'
//                 paceholder='Search' 
//                 // value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.searchValue)}
//               />
//               {/* <span className={styles.iconSearch}><FaSearch /></span>     */}
//             </div>           
//       </form>
//       <ul className='header-icon'>
//         <li><button></button></li>
//         <li><button></button></li>
//         <li><button></button></li>
//         <li><button></button></li>
//       </ul>



//     </header>
//   )
// }

// export default Header


function Header() {

  // useEffect(() => {
  //   const apiUrl = 'https://api.itbook.store/1.0/search/mongodb';
  //   axios.get(apiUrl).then((resp) => {
  //     const allBooks = resp.data.books;
  //     setBooks(allBooks);
  //   }).catch((error) => {
  //     console.log(error)
  //     });
  // }, []);

  let {search} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
  const [query,setQuery] = useState('');
  
   const {bascet} = useSelector(state=> state.books)
   const {favourite} = useSelector(state=> state.books)

   const addQuery = () => dispatch(setInputValue(query))

    const handleClickSearch = (e) =>{
      if (e.target){
        addQuery()
        navigate(`/search`)
      }
    }
  
    

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to={'/'} className={styles.logo}>
            <h2>BOOKSTORE</h2>
          </Link>
          <Subject/>
          <div className={styles.d3}>
            <form className={styles.form}>
                <input className={styles.input}  name='search' 
                  placeholder='Search' 
                  autoComplete='off'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}/> 
                <span  className={styles.iconSearch} onClick={handleClickSearch}><img src={Search}/></span> 
              {/* <div className={styles.box}></div>         */}
                
            </form>
          </div>
          <ul className={styles.headerRight}>
            <li className={styles.icon}>
              <Link to={'/favourite'}>
               <img src={Like} alt='#'></img>
               <span>{favourite?.length}</span>
               </Link>
            </li>
            <li className={styles.icon}>
                <Link to={'/cart'} className={styles.cart}>
                <img src={Basket} alt='#'></img>
                <span>{bascet?.length}</span>
                </Link>
            </li>
              <li className={styles.icon}>
              <img src={User} alt='#'></img>
              </li>

          </ul>
        </div>
      </div>
    </header>

  )

}

export default Header;
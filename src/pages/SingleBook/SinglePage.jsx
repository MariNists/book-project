import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from '../../components/Title/Title'
import './SinglePage.css'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import { useNavigate } from 'react-router-dom'
import Left from '../../components/img/Left.png'
import { addToCart } from '../../store/booksSlice'
import { addToFavourite } from '../../store/booksSlice'
import Rating from "@mui/material/Rating";



export const SinglePage = () => {

  // const [isFavourites,setFavourites] = useState(true);
  // const [iaActivDescr,setActivDescr] = useState(true)
  // const [isActivAuthors,setActivAuthors] = useState(false)
  // const [isActivReviews,detActivReviews] = useState(true)


  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const singlebook = useSelector(state => state.books.databook)

  const handleAddToCart = () =>{
    console.log(singlebook)
    dispatch(addToCart({
      ...singlebook,
      quantity: 1
    }))
    alert("Successfully!")
  }

  const handleAddToFavourite = () =>{
    console.log(singlebook)
    dispatch(addToFavourite({
      ...singlebook,
      quantity: 1
    }))
    alert("Successfully!")
  }
  
  return (
    
    <div className="single-card">
            <div className="single-card-title">
                <img src={Left} alt='#' onClick={() =>  navigate(-1)} ></img>
                <Title title={singlebook.title} fz={46}/>
            </div>
            <div className="single-card__show-info">
                <div className='book-image'>
                    <img src={singlebook.image} alt="#"></img>
                    <button className='heart-dislike' onClick={handleAddToFavourite}></button>
                </div>
                <ul className='info'>
                    <li>
                      <span className="one-price">{singlebook.price}</span>
                      <Rating value={singlebook.rating} readOnly />
                    </li>
                    <li>
                      <span className='book-info'>Authors</span>
                      <span className='book-value'>{singlebook.authors}</span>
                    </li>
                    <li>
                      <span className='book-info'>Publisher</span>
                      <span className='book-value'>{singlebook.publisher}</span>
                    </li>
                    <li>
                      <span className='book-info'>Language</span>
                      <span className='book-value'>{singlebook.language}</span>
                    </li>
                    <li>
                      <span className='book-info'>Format</span>
                      <span className='book-value'>eBook/PDF</span>
                    </li>
                    <li>
                      <select className='select' name='select'>
                        <option value='val'>More details</option>
                        <option value='val'>Subtitle: {singlebook.subtitle}</option>
                        {/* <option value='val'>Year: {singlebook.year}</option>
                        <option value='val'>Pages: {singlebook.pages}</option> */}
                      </select>
                    </li>
                    <li><button className='add-cart' onClick={handleAddToCart}>add to cart</button></li>
                    <li><span className='prewiew'>Preview book</span></li> 
                </ul>
            </div>
            <ul className='books-str'>
                <li>Description</li>
                <li>Authors</li>
                <li>Review</li>
            </ul>
            <div className="card-description">
                <p>{singlebook.desc}</p>
                <p>{singlebook.authors}</p>
                <p>Review</p>
            </div>
            <div className="card-links">Links</div>
            <Subscribe/>
        </div>
  )
  
}

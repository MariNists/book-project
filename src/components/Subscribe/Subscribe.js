import React from 'react'
import './Subscribe.css'

export const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='container'>
            <h3 className='subscribe-h'>SUBSCRIBE TO NEWSLETTER</h3>
            <p className='subscribe-p'>Be the first to know about new IT books, upcoming releases, exclusive offers and more</p>
            <div className='email'>
                <input  placeholder='Your email'></input>
                <button className='subscribe-button'>Subscribe</button>
            </div>
        </div>
        
        
    </div>
  )
}

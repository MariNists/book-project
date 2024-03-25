import React from 'react'

export const Title = ({title,fz}) => {
  return (
    <h3 className='title' style={{fontSize:fz}}>{title}</h3>
  )
}

import React from 'react';

import Spinner from 'components/Spinner'
import './styles.css';

interface props {
  icon: string
  title: string
  value1: number
  value2: number
}

export default function Drink({
  icon,
  value1,
  value2,
  title
}: props) {
  return (
    <div className='ac-drink-container'>
      <img src={icon} alt='logo' style={{ marginTop: '10px' }}/>
      <div className='ac-drink-name-container'>
      <div className='ac-drink-type'>{title}</div>
      </div>
    
      <Spinner value={value1} suffix='%を' />
      <Spinner value={value2} suffix='ml' />
    </div>
  )
}

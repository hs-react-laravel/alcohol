import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import './styles.css';

interface props {
  columns: number
  elementStyle?: any
  options: string[]
}

export default function({
  columns,
  options,
  elementStyle
}: props) {
  const [selected, updateSelected] = useState<undefined | number>(undefined)
  function onItemClick(index: number) {
    updateSelected(index)
  }
  return columns === 1 ? (
    <div className='ac-multichoice-container'>
      {options.map((option, index) => (
        <Button 
          style={{
            ...elementStyle, 
            backgroundColor: index !== selected ? 'white' : '#9BCFD1',
            color: index !== selected ? '#AAAAAA' : 'white',
            borderRadius: 15
          }} 
          className='ac-select-button' 
          onClick={() => onItemClick(index)}
          key={index}>
          {option}
        </Button>
      ))}
    </div>
  ) : (
    <div style={{ display: 'flex' }}>
    <div className='ac-multichoice-container ac-multichoice-column'>
      {options.map((option, index) => (
        (index < Math.ceil(options.length / 2) &&
        <Button 
          style={{
            ...elementStyle, 
            backgroundColor: index !== selected ? 'white' : '#9BCFD1',
            color: index !== selected ? '#AAAAAA' : 'white',
            borderRadius: 15
          }} 
          className='ac-select-button' 
          onClick={() => onItemClick(index)}
          key={index}>
          {option}
        </Button>)
      ))}
    </div>
    <div className='ac-multichoice-container ac-multichoice-column'>
      {options.map((option, index) => (
        (index >= Math.ceil(options.length / 2) &&
        <Button 
          style={{
            ...elementStyle, 
            backgroundColor: index !== selected ? 'white' : '#9BCFD1',
            color: index !== selected ? '#AAAAAA' : 'white',
            borderRadius: 15
          }} 
          className='ac-select-button' 
          onClick={() => onItemClick(index)}
          key={index}>
          {option}
        </Button>)
      ))}
    </div>
    </div>
  )
}
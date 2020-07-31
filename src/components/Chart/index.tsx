import React from 'react'

import chart from 'svgs/chart.svg'
import man from 'svgs/man.svg'
import manYellow from 'svgs/man-yellow.svg'
import './styles.css';

interface props {
  rank: number
  volume: number
  rank2?: number
  volume2?: number
}

export default function({
  rank,
  rank2,
  volume,
  volume2,
}: props) {
  return (
    <div className='ac-chart-container'>
      <div style={{
        width: '300px',
        margin: '60px auto 0',
        position: 'relative',
      }}>
        <img src={chart} alt='chart' />
        <div style={{
          width: '2px', height: '37px',
          backgroundColor: 'white',
          position: 'absolute', right: rank * 3 + 'px', bottom: '0'
        }} />
        <img src={man} alt='man' style={{
          position: 'absolute', right: (rank * 3 - 28) + 'px', bottom: (40 - rank * 0.13) + 'px'
        }} />
        <span style={{
          position: 'absolute', right: 0, bottom: '40px', 
          display: 'inline-block', marginRight: '-6px', 
          color: 'black', fontSize: '22px', fontWeight: 'bold'
        }}>1位</span>
        {!rank2 && (
          <span style={{
            position: 'absolute', left: 0, bottom: '24px', 
            display: 'inline-block', marginLeft: '-20px', 
            color: '#DEED15', fontSize: '22px', fontWeight: 'bold'
          }}>100位</span>
        )}
        <span style={{
          position: 'absolute', right: (rank * 3 - (volume >= 10 ? 24 : 16)) + 'px', bottom: '-24px', 
          display: 'inline-block', marginLeft: '-20px', 
          color: '#993333', fontSize: '22px', fontWeight: 'bold'
        }}>{volume}g</span>
        {volume2 && rank2 && (
          <span style={{
            position: 'absolute', right: (rank2 * 3 - (volume2 >= 10 ? 24 : 16)) + 'px', bottom: '-24px', 
            display: 'inline-block', marginLeft: '-20px', 
            color: '#993333', fontSize: '22px', fontWeight: 'bold'
          }}>{volume2}g</span>
        )}
        {rank2 && (
          <div style={{
            width: '2px', height: '37px',
            backgroundColor: 'white',
            position: 'absolute', right: rank2 * 3 + 'px', bottom: '0'
          }} />
        )}
        {rank2 && (
          <img src={manYellow} alt='man' style={{
            position: 'absolute', right: (rank2 * 3 - 18) + 'px', bottom: (40 - rank2 * 0.13) + 'px'
          }} />
        )}
      </div>
    </div>
    
  )
}
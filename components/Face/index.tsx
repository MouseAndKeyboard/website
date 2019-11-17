import React, { useState } from 'react'
import style from './style'

export default () => {
  const [face, setFace] = useState(':)')
  return (
    <>
      {style}
      <h1
        className='display-1 face'
        onMouseEnter={() => setFace(';)')}
        onMouseLeave={() => setFace(':)')}
      >{face}
      </h1>
    </>
  )
}

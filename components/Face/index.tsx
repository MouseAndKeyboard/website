import React, { useState } from 'react'

const Face = () => {
  const [face, setFace] = useState(':)')

  return (
    <h1
      className="display-1 m-0"
      onMouseEnter={() => setFace(';)')}
      onMouseLeave={() => setFace(':)')}
    >
      {face}
    </h1>
  )
}

export default Face

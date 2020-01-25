import React from 'react'
import style from './style'

export default (project: any) => {
  return (
    <>
      {style}
      <div className="img">
        <span>{project.client}</span>
      </div>
      <div className="title mt-3">
        <div className="bg-dark p-2">
          <i
            className="fas fa-laptop-code text-white"
            style={{ fontSize: '1.5rem' }}
          />
        </div>
        <div className="ml-3">{project.name}</div>
      </div>
    </>
  )
}

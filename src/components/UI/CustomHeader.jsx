import React from 'react'

export default function CustomHeader({children, className}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

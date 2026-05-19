import React from 'react'

export default function NavItem({text, onClick}) {
  return (
    <div className='nav-item' onClick={onClick}>
      {text}
    </div>
  )
}

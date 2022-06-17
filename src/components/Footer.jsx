import React from 'react'

export default function Footer() {
    const currentTime = new Date().getFullYear()

  return (
    <div className='footer'>
        Orhan ARI {currentTime}
    </div>
  )
}

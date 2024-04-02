import React from 'react'

export default function Title({children}: {
  children: React.ReactNode
}) {
  return (
    <h2 className='text-xl font-bold text-black'>{children}</h2>
  )
}

import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {
  return (
    <UserButton afterSignOutUrl='/'/>
  )
}

export default Files
import withAuth from '@/components/Producted/ProductedRoute'
import SignUp from '@/components/SignIn/SignUp'
import React from 'react'

const page = () => {
  return (
    <div>
      <SignUp/>
    </div>
  )
}

export default withAuth (page)

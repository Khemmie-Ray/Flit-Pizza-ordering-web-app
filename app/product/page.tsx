import React from 'react'
import ExternalLayout from '../(components)/External-Layout'
import Productcard from './(components)/productcard'

const Product = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
    <ExternalLayout>
        <Productcard />
    </ExternalLayout>
  </div>
  )
}

export default Product
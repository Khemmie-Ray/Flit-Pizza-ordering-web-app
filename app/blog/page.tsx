import React from 'react'
import ExternalLayout from '../(components)/External-Layout'
import BlogCards from './(components)/blogCards'

const Blog = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <ExternalLayout>
        <BlogCards />
      </ExternalLayout>
    </div>
  )
}

export default Blog
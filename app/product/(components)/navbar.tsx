import React from 'react'
import { IoFilter } from "react-icons/io5";

const Navbar = () => {
  return (
    <section>
        <button><IoFilter />Filter</button>
        <h5>Showing all results</h5>
    </section>
  )
}

export default Navbar
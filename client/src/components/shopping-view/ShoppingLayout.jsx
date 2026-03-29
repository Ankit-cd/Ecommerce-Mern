import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopHeader from './ShopHeader'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col w-full'>
        <ShopHeader/>
        <Outlet/>
    </div>
  )
}

export default ShoppingLayout
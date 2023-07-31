import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../../components'

const Header = () => {
  return (
    <div className='w-1100 flex items-center justify-between'>
        <img src={logo} className='w-[240px] h-[70px] object-cover' />
        <div>
          <Button text={'Đăng ký'} textColor='text-white' bgColor='bg-[#3961fb]' />
          <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' />
          <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-[#3961fb]' />
        </div>
    </div>
  )
}

export default Header
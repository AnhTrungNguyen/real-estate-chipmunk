import React, {useCallback} from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../../components'
import icons from '../../utils/icons'
import { useNavigate } from 'react-router-dom'
import {path} from '../../utils/constant'

const { BsPatchPlusFill } = icons

const Header = () => {
  const navigate = useNavigate()
  const goLogIn = useCallback(() => {
    navigate(path.LOGIN)
  }, [])
  
  const goHome = useCallback(() => {
    navigate(path.HOME)
  }, [])

  return (
    <div className='w-1100'>
    <div className='w-1100 flex items-center justify-between'>
        <img src={logo} className='w-[240px] h-[70px] object-cover my-5' />
        <div className='flex items-center gap-3'>
          <span onClick={goHome} className='cursor-pointer'>Bất Động Sản Chipmunk xin chào !</span>
          <Button text={'Đăng ký'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogIn}/>
          <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogIn}/>
          <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-secondary2' IcAfter={BsPatchPlusFill} />
        </div>
    </div>
    </div>
  )
}

export default Header
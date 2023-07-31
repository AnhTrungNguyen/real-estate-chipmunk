import React, {memo} from 'react'

const inputForm = ({label}) => {
  return (
    <div>
        <label className='text-xs' htmlFor='phone'>{label}</label>
        <input type='text' id='phone' className='outline-none bg-[#e8f0fe] p-2 rounede-md w-full' />
    </div>
  )
}

export default memo(inputForm)
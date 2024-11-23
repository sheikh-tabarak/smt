import React from 'react'
import { VscLoading } from "react-icons/vsc";


const Button = ({ disabled, icon, size, type, className, label, loading, onClick }) => {

  return (
    <button onClick={onClick ? onClick : () => { console.log('No function added on click') }}
      type={`${type ? type : ''}`}
      disabled={disabled ? disabled : loading}
      className={`flex justify-center duration-500 text-white  items-center rounded-lg focus:outline-none focus:shadow-outline w-full  ${className ? className : ' '}  ${loading ? 'bg-primary-300' : 'bg-primary-500 hover:bg-primary-400 '} ${size == 'sm' ? 'px-2 min-h-8 text-xs' : size == 'base' ? 'px-4 min-h-12 text-sm font-semibold' : 'px-4 min-h-16 text-base font-bold'} ${disabled && '!bg-primary-100 !hover:bg-primary-100'}`}
    >
      {loading ?
        <span className='animate-spin text-xl'> <VscLoading /> </span> :
        <div className='flex gap-2 items-center'><span className='text-xl'>{icon}</span> {label ? label : 'Primary Button'}</div>}
    </button>
  )
}

export default Button
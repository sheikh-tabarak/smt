import React from 'react'
import { VscLoading } from "react-icons/vsc";
import '../styles.css';

const Button = ({
  children,
  onClick,
  type,
  className = '',
  disabled = false,
  loading = false,
  size = 'medium',
  color = 'primary',
}) => {

  const baseStyles = 'flex justify-center duration-500 items-center rounded-lg focus:outline-none focus:shadow-outline w-full';

  const SizeVariant = {
    small: 'p-2 min-h-10 text-xs',
    medium: 'px-4 py-3 min-h-14 text-sm font-semibold',
    large: 'p-4 min-h-16 text-base font-bold',
  };

  const ColorVariant = {
    preset: 'bg-primary hover:bg-primary-600 opacity-80 ',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    info: 'bg-indigo-500 text-white hover:bg-indigo-600',
    outlinePrimary: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    outlineSecondary: 'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
  }

  const loadingStyles = 'opacity-50 cursor-not-allowed';
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={disabled || loading ? null : onClick}
      className={`${baseStyles} ${SizeVariant[size]} ${className} ${loading ? loadingStyles : ''} ${disabled ? disabledStyles : ''} ${ColorVariant[color]}`}
      type={`${type ? type : null}`}
      disabled={disabled ? disabled : loading}
    >
      {loading ?
        <span className='animate-spin'> <VscLoading /> </span> :
        children}
    </button>
  )
}

export default Button
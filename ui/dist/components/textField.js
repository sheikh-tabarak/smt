import React, { useEffect, useRef, useState } from 'react'
import { BiError, BiErrorCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

export default function TextField({ ref, isRequired, type, isTextArea, placeholder, label, value, changeValue, disable }) {

    const [startCheckup, setstartCheckup] = useState(false)
    const [isEmpty, setisEmpty] = useState(false)


    useEffect(() => {

        if (startCheckup == false) {
            setstartCheckup(true);
            return; // exit early, don't run the effect
        }

        else {
            if (isRequired) {
                if (value == '') {
                    console.log('yes yes')
                    setisEmpty(true)
                }
                else {
                    console.log('no no ')
                    setisEmpty(false)
                }
            }
        }

        console.log(isEmpty)
    }, [value])


    const onChangeFunction = () => {
        changeValue()
    }


    return (
        <div className='my-2 font-poppins w-full'>
            <label htmlFor={label} className="mb-2 block font-medium text-sm text-themeblack dark:text-white">
                <div className='flex justify-between items-end'>
                    <div>{label ? label : ''} {isRequired && <span className=' text-red-600'>*</span>}</div>
                </div>
            </label>

            <div className='relative'>

                <div className='absolute flex items-center right-4 top-0 bottom-0'>

                    {isEmpty &&
                        <BiErrorCircle title={`${label} can't be Empty`} className='relative size-5 text-red-600' />
                    }
                </div>
                {
                    isTextArea ?
                        <textarea
                            required={isRequired}
                            id={label}
                            rows={5}
                            disabled={disable}
                            value={value}
                            onChange={changeValue}
                            placeholder={placeholder}
                            className="w-full rounded border-[1px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-themeblack dark:text-white dark:focus:border-primary"
                        ></textarea> :
                        disable ? <input
                            disabled={true}
                            onFocus={() => {
                                toast.warn('You can\'t Modify ')
                            }}
                            id={label}
                            value={value}
                            onChange={changeValue}
                            type={type}
                            placeholder={placeholder}
                            className={`w-full rounded border-[1px]  bg-transparent py-3 px-5 text-black outline-none transition   disabled:cursor-default disabled:bg-whiter  dark:bg-themeblack dark:text-white dark:focus:border-primary ${isEmpty == true ? 'border-red-600 dark:border-red-600 focus:border-red-600 active:border-red-600' : 'focus:border-primary active:border-primary border-stroke dark:border-form-strokedark'}`}
                        /> :
                            <input
                                ref={ref ? ref : null}
                                onClick={() => {
                                    disable &&
                                        toast.warn('You can\'t Modify ')
                                }}
                                required={isRequired}
                                disabled={false}
                                id={label}
                                value={value}
                                autoComplete={type == 'password' && 'new-password'}
                                onChange={changeValue}
                                type={type}
                                placeholder={placeholder}
                                className={`w-full rounded border-[1px]  bg-transparent py-3 px-5 text-black outline-none transition   disabled:cursor-default disabled:bg-whiter  dark:bg-themeblack dark:text-white dark:focus:border-primary ${isEmpty == true ? 'border-red-600 dark:border-red-600 focus:border-red-600 active:border-red-600' : 'focus:border-primary active:border-primary border-stroke dark:border-form-strokedark '}`}
                            // className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                }
            </div>


        </div>
    )
}

import { toast } from 'react-toastify';
import { FaIcons } from 'react-icons/fa';
import React, { useState } from 'react'
import { copyToClipboard } from '../../utils/functions';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { BiCopy } from 'react-icons/bi';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from '@sheikhtabarak/ui';


function ButtonWidget() {

    const [loading, setLoading] = useState(false)

    const sizes = [
        { label: 'Small', code: '<Button size={\'small\'}>Small Button</Button>' },
        { label: 'Medium', code: '<Button size={\'medium\'} >Medium Button</Button>' },
        { label: 'Large', code: '<Button size={\'large\'}>Large Button</Button>' },
    ];


    const ButtonCode = {

        "usage": `
import React from 'react';
import { FaIcons } from 'react-icons/fa';
import { Button } from "@sheikhtabarak/ui";

function App(){
  const [loading, setLoading] = useState(false)
 return (
  <Button
     loading={loading}
     color={'primary'}
     size={'medium'}
     onClick={() => {
     setLoading(true)
     setTimeout(() => {
       toast.success('Task Completed')
       setLoading(false)
     }, 3000);
     }}
     children={<div className='flex gap-2 items-center'><FaIcons />My Fancy Button</div>}
   />
 );
}
 `
    }


    return (
        <div>
            <h2 className="text-2xl font-bold">Button</h2>
            <p className="mt-2 ">To install the package, run the following command:</p>

            <div className='w-full py-4'>
                <div>
                    <Button
                        loading={loading}
                        color={'primary'}
                        size={'medium'}
                        onClick={() => {
                            setLoading(true)
                            setTimeout(() => {
                                toast.success('Task Completed')
                                setLoading(false)
                            }, 3000);
                        }}
                        children={<div className='flex gap-2 items-center'><FaIcons />My Fancy Button</div>}
                    />
                </div>
            </div>
            <pre className="rounded mt-2 relative">
                <span onClick={() => copyToClipboard("Button Code", ButtonCode.usage)} className='absolute top-3 right-3 cursor-pointer text-[10px] text-slate-400 flex gap-1 p-1 rounded border-slate-500 border-[1px] items-center hover:scale-[0.96] duration-500 transition'><BiCopy /> <span>Copy</span></span>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {ButtonCode.usage}
                </SyntaxHighlighter>
            </pre>
            <h1 className="text-2xl font-bold mb-4 ">Variations Examples</h1>

            <div className="container mx-auto p-4">
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">Size</th>
                            <th className="border border-gray-300 p-2 text-left">Example Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`size={'small'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Small Button'} size={'small'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`size={'medium'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Medium Button'} size={'medium'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`size={'large'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Large Button'} size={'large'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mx-auto p-4">
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">Color</th>
                            <th className="border border-gray-300 p-2 text-left">Example Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'preset'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    Color you've added to your <strong>tailwind.config.js</strong> as <strong>"primary"</strong>
                                </code>
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'primary'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Primary Button'} size={'small'} color={'primary'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'secondary'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Secondary Button'} size={'small'} color={'secondary'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'success'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Success Button'} size={'small'} color={'success'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'danger'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Danger Button'} size={'small'} color={'danger'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'warning'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Warning Button'} size={'small'} color={'warning'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'info'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Info Button'} size={'small'} color={'info'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'outlinePrimary'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Outline Primary Button'} size={'small'} color={'outlinePrimary'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`color={'outlineSecondary'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={'Outline Secondary Button'} size={'small'} color={'outlineSecondary'} />
                            </td>
                        </tr>




                    </tbody>
                </table>
            </div>

            <div className="container mx-auto p-4">
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">Others</th>
                            <th className="border border-gray-300 p-2 text-left">Example Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`disabled={true}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button disabled={true} children={'Disabled Button'} size={'small'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`loading={true}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button loading={true} children={'Loading Button'} size={'small'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`className={'bg-indigo-500 hover:bg-yellow-500'}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button className={'bg-indigo-500 hover:!bg-yellow-500 '} children={'Custom Styling Button'} size={'small'} />
                            </td>
                        </tr>

                        <tr>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <code>
                                    {`children={<div>My custom Html Button</div>}`}
                                </code>
                            </td>
                            <td className="w-1/2 border border-gray-300 p-2">
                                <Button children={<div>My custom Html Button</div>} size={'small'} />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default ButtonWidget
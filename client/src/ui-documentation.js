import React, { useEffect, useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const UIDocumentation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const { hash } = location;

  const BasicExampleCodeString = ` import React from 'react';

                import Button from "@smt/ui/dist/components/button";

                function App(){
 return (
                <Button
                  onClick={() => { console.log('Clicked') }}
                  label={'My Fancy Button'}
                  disabled={true}
                  icon={ /* your svg*/}
                  type={'submit'} // empty if nothing
                  className={'bg-red-500'} // Custom Styling | Default : bg-primary 
                  size={'sm'} // Can be sm | md | lg
                  loading={true} // loading button in case of async actions
                />
                );
  }`

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <motion.div
        className={`bg-black text-white md:w-64 w-full fixed md:relative h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 ' : '-translate-x-full hidden'} md:translate-x-0 overflow-y-scroll`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
      >
        <div className="flex w-full items-center justify-between p-4 border-b border-gray-700">
          <a href="/ui#installation"><h1 className="text-lg font-bold">
            <img className='h-16' src="/logo.png" alt="" />
          </h1></a>
          <button onClick={toggleSidebar} className="md:hidden p-1 text-white">
            <FaTimes />
          </button>
        </div>
        <nav className="mt-4">
          <ul>


            <li className="px-4 rounded transition duration-200">
              <details open>
                <summary className='cursor-pointer list-none select-none font-semibold py-2'>
                  Introduction
                </summary>

                <ul className='flex flex-col gap-2 my-2 px-2 text-sm font-semibold border-l-[1px] border-slate-600'>
                  <a href="#installation"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('installation') ? 'bg-gray-700 text-green-300' : ''}`}>Installation</li></a>
                  <a href="#usage"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('usage') ? 'bg-gray-700 text-green-300' : ''}`}>Usage</li></a>
                </ul>
              </details>
            </li>

            <li className="px-4 rounded transition duration-200 pb-2">
              <details className=''>
                <summary className='cursor-pointer list-none select-none font-semibold py-2'>
                  Button
                </summary>

                <ul className='flex flex-col gap-2 my-2 px-2 text-sm font-semibold border-l-[1px] border-slate-600'>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500'>Usage</li>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500'>Attributes</li>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500' >Examples</li>
                </ul>
              </details>
            </li>

            <li className="px-4 rounded transition duration-200 pb-2">
              <details className=''>
                <summary className='cursor-pointer list-none select-none font-semibold py-2'>
                  Input Field
                </summary>

                <ul className='flex flex-col gap-2 my-2 px-2 text-sm font-semibold border-l-[1px] border-slate-600'>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500'>Usage</li>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500'>Attributes</li>
                  <li className='hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500' >Examples</li>
                </ul>
              </details>
            </li>


          </ul>
        </nav>
      </motion.div>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 overflow-y-scroll`}>
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
          <button className="md:hidden p-2 text-gray-800" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <button className="hidden md:block p-2 text-xl text-gray-800" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex items-center">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-gray-800 text-2xl transition-transform duration-200 hover:scale-110" />
            </a>

          </div>
        </header>

        {/* Content */}
        <main className="mt-4 p-4">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className={`text-2xl font-bold `}>Introduction</h2>
            <p className="mt-2 flex gap-2 items-center"><span className='bg-black p-1 pr-2 rounded-lg'><img className='h-8' src="/logo.png" alt="" /></span> allows you to use the Core elements designed with easy modifications</p>
          </motion.section>

          <motion.section id="installation" className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="mt-2">To install the package, run the following command:</p>
            <pre className="bg-gray-200 p-4 rounded mt-2">
              <code>npm install my-package</code>
            </pre>
          </motion.section>

          <motion.section id="usage" className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Usage</h2>
            <p class Name="mt-2">Use in your react app</p>
            <pre className="bg-gray-200 p-4 rounded mt-2">
              <code>
                {BasicExampleCodeString}
              </code>
            </pre>
          </motion.section>


          {/* Add more sections as needed */}
        </main>
      </div>
    </div>
  );
};

export default UIDocumentation;
import React, { useEffect, useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiCopy } from 'react-icons/bi';
import { copyToClipboard } from '../../utils/functions';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ButtonWidget from './button';


const UIDocumentation = () => {

  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const checkDeviceSize = () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the max-width as needed
    setIsSmallDevice(mediaQuery.matches);
  };

  useEffect(() => {
    // Check device size on initial render
    checkDeviceSize();


    // Add event listener to handle window resize
    window.addEventListener('resize', checkDeviceSize);

    if (isSmallDevice) {
      setIsOpen(false)
    }
    else {
      setIsOpen(true)
    }
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };



  }, []);


  const location = useLocation();
  const navigate = useNavigate();

  const { hash } = location;

  useEffect(() => {
    // Set the hash to a specific value when the component mounts
    const newHash = '#installation'; // Change this to whatever hash you want
    if (window.location.hash !== newHash) {
      // Update the URL hash without reloading the page
      navigate(`${location.pathname}${newHash}`, { replace: true });
    }
  }, [navigate, location.pathname]);

  const code = {
    "installation": `npm install @sheikhtabarak/ui`,

    "usage": `import React from 'react';

import { Button } from "@sheikhtabarak/ui";

function App(){
 return (
    <Button attributes... />
 );
}`,
    "element_button": `
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <title>SMT UI | #1 Frontend Library provides easy to use elements </title>
      {/* Sidebar */}
      <motion.div
        className={`bg-black z-50 text-white w-full md:w-64 lg:!w-64 fixed md:relative h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 ' : '-translate-x-full hidden'} md:translate-x-0 overflow-y-scroll`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
      >
        <div className="flex  w-full items-center justify-between p-4 border-b border-gray-700">
          <a href="/ui/#installation"><h1 className="text-lg font-bold relative">
            <img className='h-16' src="/logo-dark.png" alt="" />
            <span className='absolute bottom-0 left-4 text-xs'>1.0.1</span>
          </h1>
          </a>
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
                <ul className='flex flex-col relative gap-2 my-2 px-2 text-sm font-semibold border-l-[1px] border-slate-600'>
                  <a onClick={isSmallDevice ? toggleSidebar : null} href="#installation"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('installation') ? 'bg-gray-700 text-green-300' : ''}`}>Installation</li></a>
                  <a onClick={isSmallDevice ? toggleSidebar : null} href="#usage"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('usage') ? 'bg-gray-700 text-green-300' : ''}`}>Usage</li></a>
                </ul>
              </details>
            </li>

            <li className="px-4 rounded transition duration-200">
              <details >
                <summary className='cursor-pointer list-none select-none font-semibold py-2'>
                  Elements
                </summary>
                <ul className='flex flex-col relative gap-2 my-2 px-2 text-sm font-semibold border-l-[1px] border-slate-600'>
                  <a onClick={isSmallDevice ? toggleSidebar : null} href="#button"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('button') ? 'bg-gray-700 text-green-300' : ''}`}>Button</li></a>
                  {/* <a onClick={isSmallDevice ? toggleSidebar : null} href="#input"><li className={`hover:text-green-300 cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-md transition duration-500 ${hash.includes('input') ? 'bg-gray-700 text-green-300' : ''}`}>TextField</li></a> */}
                </ul>
              </details>
            </li>

          </ul>
        </nav>
      </motion.div>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 overflow-y-scroll`} style={{ scrollBehavior: 'smooth' }}>
        {/* Header */}
        <header className="z-40 flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
          <button className="md:hidden p-2 text-slate-800" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <button className="hidden md:block p-2 text-xl text-slate-800" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isOpen ? <div className='h-12'></div> : <a href="/ui/#installation"><h1 className="text-lg font-bold">
            <img className='h-12' src="/logo-light.png" alt="" />
          </h1></a>}
          <div className="flex items-center">
            <a target={'_blank'} href="https://github.com/sheikh-tabarak/smt/tree/main/ui" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-slate-800 text-2xl transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="mt-4 p-4">

          <motion.section id='introduction' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className={`text-2xl font-bold `}>Introduction</h2>
            <p className="mt-2 flex flex-wrap gap-2 items-center"><div><img className='h-8 pt-1' src="/logo-light.png" alt="" /></div> allows you to use the Core elements designed with easy modifications</p>
          </motion.section>

          <motion.section id="installation" className="pt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Installation</h2>
            <p className="mt-2 ">To install the package, run the following command:</p>
            <pre className="rounded mt-2 relative">
              <span onClick={() => copyToClipboard("Installation Code", code.installation)} className='absolute top-3 right-3 cursor-pointer text-[10px] text-slate-400 flex gap-1 p-1 rounded border-slate-500 border-[1px] items-center hover:scale-[0.96] duration-500 transition'><BiCopy /> <span>Copy</span></span>
              <SyntaxHighlighter language="javascript" style={tomorrow}>
                {code.installation}
              </SyntaxHighlighter>
            </pre>
          </motion.section>

          <motion.section id="usage" className="pt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Usage</h2>
            <p className="mt-2">Use in your react app</p>
            <pre className="rounded mt-2 relative">
              <span onClick={() => copyToClipboard("Usage Code", code.usage)} className='absolute top-3 right-3 cursor-pointer text-[10px] text-slate-400 flex gap-1 p-1 rounded border-slate-500 border-[1px] items-center hover:scale-[0.96] duration-500 transition'><BiCopy /> <span>Copy</span></span>
              <SyntaxHighlighter language="javascript" style={tomorrow}>

                {
                  code.usage
                }
              </SyntaxHighlighter>
              {/* </code> */}
            </pre>
          </motion.section>

          <motion.section id="button" className="pt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

            <ButtonWidget />

          </motion.section>

          <motion.section id="input" className="pt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {/* <h2 className="text-2xl font-bold">Text Field</h2>
            <p className="mt-2">Use in your react app</p>
            <pre className="rounded mt-2 relative">
              <span onClick={() => copyToClipboard("Input Field Code", code.element_input)} className='absolute top-3 right-3 cursor-pointer text-[10px] text-slate-400 flex gap-1 p-1 rounded border-slate-500 border-[1px] items-center hover:scale-[0.96] duration-500 transition'><BiCopy /> <span>Copy</span></span>
              <SyntaxHighlighter language="javascript" style={tomorrow}>
                {
                  code.element_input
                }
              </SyntaxHighlighter>
            </pre> */}
          </motion.section>


        </main>
      </div>
    </div>
  );
};

export default UIDocumentation;
"use client";
// components
import Circles from '/components/Circles';

// icons
import {BsArrowRight} from 'react-icons/bs';

// framer
import {motion} from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import { useState } from 'react';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name:name, email:email, subject:subject, message:message}),
      });
      const {msg} = await res.json();
      setError(msg);
      console.log(error);
    }
  
    return (
      <div className='h-full bg-primary/30'>
        <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
          {/* text & form */}
          <div className='flex flex-col w-full max-w-[700px]'>
            {/* text */}
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'>
              Let's <span className='text-accent' /* eslint-disable react/no-unescaped-entities */>connect.</span> 
            </motion.h2>
            {/* form */}
            <motion.form
            onSubmit={handleSubmit} 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                {/* input group */}
                <div className='flex gap-x-6 w-full'>
                  <input 
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text' placeholder='Name' className='input' />
                  <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='text' placeholder='Email' className='input' />
                </div>
                <input 
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type='text' placeholder='Subject' className='input' />
                <textarea 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder='Message' className='textarea'></textarea>
                <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'/* eslint-disable react/no-unescaped-entities */>Let's talk</span>   
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                </button>
              </motion.form>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Contact;
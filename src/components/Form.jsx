import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const formRef=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formRef.current)
    
        emailjs
          .sendForm('', 'template_rgownsg', formRef.current, {
            publicKey: '',
          })
          .then(
            () => {
                
                toast('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                    });
                
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          formRef.current.reset();
      }

  return (
    
    <section className=" dark:bg-gray-900">
  <div className=" px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get In Touch</h2>
      
      <form onSubmit={sendEmail} ref={formRef}  className="space-y-8">
          <div className='flex flex-col sm:flex-row gap-2'>
              <input name="user_name" type="text" id="form_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none" placeholder="Enter your name " required/>
              <input name="user_email" type="email" id="form_email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none" placeholder="Enter Your email" required/>
          </div>
          
          <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    
  )
}

export default Form

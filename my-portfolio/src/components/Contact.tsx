import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in Touch</h2>
                <p className='text-black-600 text-[18px] pt-2'>
                    Drop me a line,give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                    <AiOutlineMail size={30} /> xyz@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                    <BsTelephone size={30} /> (021) 123-4567
                </div>
            </div>
            <div className='spacee-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-black'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-black'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="msg">Message</label>
                    <textarea className='bg-transparent border border-black '
                   id='msg' rows={8} >
                     </textarea>
                </div>
                <br />
                <button className='bg-accent p-2 px-6'>Submit</button>
            </div>
        </div>
    </div>

    
  )
}

export default Contact

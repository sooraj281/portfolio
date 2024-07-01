import React from 'react';
import { CONTACT } from '../constants';
import { FaArrowUp } from 'react-icons/fa';

const Contacts = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>Urumbottil House Mathodam,
                                  po kannadipramba,kannur,
                                  kerala India 
                                  670604</p>
        <p className="my-4">{CONTACT.phoneNo}</p>       
        <a href='mailto:soorajsoorajk136@gmail.com' className='border-b'>{CONTACT.email}</a>
      </div>
      <div className="fixed bottom-20 right-10">
        <FaArrowUp onClick={handleScrollUp} className="cursor-pointer text-2xl animate-bounce" />
      </div>
    </div>
  );
};

export default Contacts;

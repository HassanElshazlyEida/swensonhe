import React, { useState, useEffect } from 'react';


const EventBuilder  = () => {

  return (
        <div className=' p-5'>
            <p className='font-semibold'> Event Builder</p>
            <p className='font-serif text-slate-400 '>
                <span>Add items to your event using the  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{
                    display:'inline'
                }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
    to view our cost estimate.</span>
            </p>
        </div>
  );
};

export default EventBuilder;
import React from 'react';
import { motion } from 'framer-motion';
interface ModalProps {
    close: any;
}
const  Modal: React.FC<ModalProps> = ({close}) => {
    return (
        <motion.div
        className="fixed top-0 left-0 bg-stone-300/90	 w-full h-full flex items-center justify-center z-50 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white rounded-lg p-4 max-w-xl w-full  overflow-y-auto"
           style={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
            width: '250px', // Adjust the width as needed
            height: '250px', // Adjust the height as needed
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:'50%'
          }}
          >
          {/* Modal Content */}
          <h2 className="text-2xl font-base mb-4">Event Saved !</h2>
          <p className="text-center"> 2 </p>


          {/* Close Button */}
          <button
            className="bg-slate-900	 text-white px-4 py-2 rounded-md mt-4"
            onClick={close}
          >
            Close
          </button>
        </div>
      </motion.div>
    );
};
export default Modal;



import { motion, AnimatePresence } from "framer-motion";
import { Item ,addToSelectedItems } from '../redux/actions/ItemActions';
import  { useState} from "react";
import {useSelector , useDispatch } from 'react-redux';
import Modal from "../Motions/Modal";

const EstimatePrice = () => {
    let selectedItems = useSelector((state: any) => state.selectedItems);
    let categories = useSelector((state: any) => state.categories.categories);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
      window.location.reload();
    };
  return (
    <div className="bg-white shadow-md rounded p-4 h-full text-center">
        <div className="flex flex-col ...">
            <div  className="h-40">
            <h2 className="text-2xl font-semibold mb-4">Your Event Estimate</h2>

            <div className="mb-4">
            <p className="mb-4 text-sm uppercase">
              <strong>Basic</strong>
            </p>
            <h3 className="mb-6 text-3xl">
              <strong>$ {selectedItems.calculateAverageCost}</strong>
            </h3>
            </div>

            </div>
            
            <div  className="h-80">
                <div className="mb-4">
                    <div className="p-4 max-h-[300px] overflow-y-scroll scrollbar-w-2 scrollbar-track-white scrollbar-thumb-gray-400">
                         <ol className="list-inside">
                         <AnimatePresence>
                            {categories.map((category: any) => (
                                <div key={category.id}>
                                <h2 className="text-base font-serif text-left  mb-2 text-slate-500">{category.title}</h2>
                                {Object.values(selectedItems[category.id] ?? []).map((item: any) => (
                                    <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex  justify-between p-2 bg-white rounded-lg shadow-md mb-2"
                                    >
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-xs font-medium">{item.title}</h3>
                                        <p className="text-gray-500 text-xs font-mono">${item.avgBudget}</p>
                                    </div>
                                    <button
                                        onClick={()=>{
                                            dispatch(addToSelectedItems({
                                              categoryId: category.id,
                                              item: item,
                                           }));
                                          }}
                                        className="bg-red-500 hover:bg-red-700 text-white font-semibold  px-2 rounded-full"
                                    >
                                        x
                                    </button>
                                    </motion.div>
                                ))}
                                </div>
                            ))}
                            </AnimatePresence>
                      </ol>
                </div>
                </div>
            </div>
            <div  className="h-10">
            { Object.values(selectedItems).length > 0 && 
           (
            <button type="button"
            className="inline-block w-full rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init data-te-ripple-color="light"
            onClick={openModal}
            style={{
              backgroundColor:"rgb(93, 163, 169)"
              }}>
            Save
          </button>
           )}
            <AnimatePresence>
                {isModalOpen && (
                <Modal key="modal" close={closeModal} />
                )}
            </AnimatePresence>
            </div>
        </div>
     
     
    </div>
  );
};
    
export default EstimatePrice;
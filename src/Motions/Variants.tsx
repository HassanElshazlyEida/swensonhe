import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

interface VariantsProps {
    items: any;
    index: number;
  }
 const Variants: React.FC<VariantsProps> = ({items,index}) => {
    return (
    <motion.ul
    className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4"
    variants={container}
    key={index}
    initial="hidden"
    animate="visible"
  >
    {items}
    
  </motion.ul>
  );
};
export default Variants;

import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        YCCE
      </motion.h1>
    </motion.div>
  );
};

export default Loader;

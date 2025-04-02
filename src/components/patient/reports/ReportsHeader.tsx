
import { motion } from "framer-motion";

const ReportsHeader = () => {
  return (
    <div className="mb-8">
      <motion.h1 
        className="text-3xl font-bold mb-2"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Reports
      </motion.h1>
      <motion.p 
        className="text-gray-600"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Access and manage all your health reports
      </motion.p>
    </div>
  );
};

export default ReportsHeader;

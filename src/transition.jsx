import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return (props) => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <OgComponent {...props} />
    </motion.div>
  );
};

export default transition;

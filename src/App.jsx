import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { NewsBoard } from "./Components/NewsBoard";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a loading period of 8 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div>
        {loading ? (
          <motion.div
            key="loading"
            className="loading-spinner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ClipLoader size={150} color={"#123abc"} loading={loading} />
            <h2>Loading...</h2>
          </motion.div>
        ) : (
          <>
            <motion.div
              key="navbar"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar setCategory={setCategory} />
            </motion.div>
            <motion.div
              key="newsboard"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <NewsBoard category={category} />
            </motion.div>
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

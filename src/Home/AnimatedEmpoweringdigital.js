import { motion } from "framer-motion";


const AnimatedEmpoweringdigital = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Animation state
            exit={{ opacity: 0 }} // Exit state
        >

        </motion.div>
    );
};

export default AnimatedEmpoweringdigital;

import { motion } from "framer-motion"

const animations = {
    initial: { opacity: 0, },
    animate: { opacity: 1 },
    exit: { opacity: 0, }
}

export const AnimatedPage = ({ children }) => {
    return <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .35 }}
    >
        {children}
    </motion.div>
}
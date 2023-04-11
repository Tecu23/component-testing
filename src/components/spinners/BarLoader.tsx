import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BarLoader = (props: Props) => {
    return (
        <div className="grid grid-cols-1 overflow-hidden">
            <div className="w-20 h-1 col-start-1 row-start-1 bg-cyan-800"></div>
            <motion.div
                animate={{
                    x: [-20, 80],
                    width: ["20px", "20px"],
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 1.75,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                }}
                className="w-5 h-1 col-start-1 row-start-1 bg-cyan-400"
            ></motion.div>
        </div>
    );
};

export default BarLoader;

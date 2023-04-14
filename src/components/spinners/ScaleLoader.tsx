import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ScaleLoader = (props: Props) => {
    return (
        <div className="flex flex-row items-center justify-center gap-1">
            <motion.div
                animate={{
                    height: ["15px", "25px", "30px", "25px", "15px"],
                }}
                transition={{
                    ease: "easeIn",
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                }}
                className="w-1 rounded-md bg-cyan-500"
            ></motion.div>
            <motion.div
                animate={{
                    height: ["15px", "25px", "35px", "25px", "15px"],
                }}
                transition={{
                    ease: "easeOut",
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: 0.2,
                }}
                className="w-1 rounded-md bg-cyan-500"
            ></motion.div>
            <motion.div
                animate={{
                    height: ["15px", "25px", "35px", "25px", "15px"],
                }}
                transition={{
                    ease: "easeOut",
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: 0.4,
                }}
                className="w-1 rounded-md bg-cyan-500"
            ></motion.div>
            <motion.div
                animate={{
                    height: ["15px", "25px", "35px", "25px", "15px"],
                }}
                transition={{
                    ease: "easeOut",
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: 0.6,
                }}
                className="w-1 rounded-md bg-cyan-500"
            ></motion.div>
            <motion.div
                animate={{
                    height: ["15px", "25px", "35px", "25px", "15px"],
                }}
                transition={{
                    ease: "easeOut",
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: 0.8,
                }}
                className="w-1 rounded-md bg-cyan-500"
            ></motion.div>
        </div>
    );
};

export default ScaleLoader;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const SyncLoader = (props: Props) => {
    return (
        <div className="flex items-center justify-center gap-1">
            <motion.div
                animate={{ y: [0, -2.5, -5, -7.5, -10, -7.5, -5, -2.5, 0] }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                }}
                className="w-3 h-3 rounded-full bg-cyan-500"
            ></motion.div>
            <motion.div
                animate={{ y: [0, -2.5, -5, -7.5, -10, -7.5, -5, -2.5, 0] }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                    delay: 0.1,
                }}
                className="w-3 h-3 rounded-full bg-cyan-500"
            ></motion.div>{" "}
            <motion.div
                animate={{ y: [0, -2.5, -5, -7.5, -10, -7.5, -5, -2.5, 0] }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                    delay: 0.2,
                }}
                className="w-3 h-3 rounded-full bg-cyan-500"
            ></motion.div>
        </div>
    );
};

export default SyncLoader;

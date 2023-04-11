import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const SubmitButton = (props: Props) => {
    const [intervalId, setIntervalId] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    const handleClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }

        setIsLoading(true);

        const newintervalId = setInterval(() => {
            setIsLoading(false);
            setHasLoaded(true);
            console.log("Here");
        }, 5000);

        setIntervalId(newintervalId);
    };

    return (
        <div className="w-[300px] h-[300px] bg-gray-200 flex justify-center items-center">
            <motion.button
                initial={{
                    width: "200px",
                    height: "48px",
                    borderRadius: "15px",
                }}
                onClick={() => handleClick()}
                animate={
                    !hasLoaded
                        ? {}
                        : {
                              width: ["200px", "210px", "200px", "50px"],
                              height: ["48px", "50px", "48px", "48px"],
                              borderRadius: ["15px", "15px", "15px", "50%"],
                              marginLeft: ["0px", "-5px", "0px", "0px"],
                              marginTop: ["0px", "-5px", "0px", "0px"],
                              background: [
                                  "#ffffff",
                                  "#ffffff",
                                  "#ffffff",
                                  "#06b6d4",
                              ],
                          }
                }
                transition={{ ease: "easeInOut", duration: 2 }}
                className="border-2 border-cyan-500 bg-white relative"
            >
                <motion.span
                    initial={{
                        opacity: 1,
                    }}
                    animate={
                        !hasLoaded
                            ? {}
                            : {
                                  opacity: [1, 1, 0],
                                  color: ["#06b6d4", "#ffffff", "#06b6d4"],
                              }
                    }
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className="text-[20px] text-cyan-500 font-semibold flex justify-center gap-4 items-center"
                >
                    {isLoading ? "Submitting..." : "Submit"}
                    {isLoading && (
                        <div className="h-5 w-5 animate-spin border-b-2 border-cyan-500 rounded-full"></div>
                    )}
                </motion.span>
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{
                        opacity: 0,
                    }}
                    animate={
                        !hasLoaded
                            ? {}
                            : {
                                  opacity: [0, 0, 1],
                              }
                    }
                    transition={{ ease: "easeInOut", duration: 1 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                        />{" "}
                    </svg>
                </motion.div>
            </motion.button>
        </div>
    );
};

export default SubmitButton;

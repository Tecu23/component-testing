import React from "react";
import { motion } from "framer-motion";

type Props = {};

const InvestorList = (props: Props) => {
    return (
        <div className="w-full pb-[125px]">
            <p className="mb-6 text-[6px] font-bold tracking-[1.5px] leading-[8px] text-center text-[#ffda59]">
                BACKED BY PROVEN INVESTORS
            </p>
            <div className="flex overflow-hidden ">
                <motion.div
                    initial={{ translateX: "0%" }}
                    animate={{ translateX: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        type: "just",
                        ease: "linear",
                        repeatDelay: 0,
                        duration: 50,
                    }}
                    className="flex"
                >
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/arrington.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/caa.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/sequoia.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/coinbase.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/andreessen-h.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/blockchange.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/hack-vc.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/ideo.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/pantera.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px] text-white">
                        <img
                            className="filter invert"
                            src="deso/investor_list/polychain-capital.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/tq-ventures.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/variant.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/wrinkevoss.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ translateX: "0%" }}
                    animate={{ translateX: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        type: "just",
                        ease: "linear",
                        duration: 50,
                    }}
                    className="flex"
                >
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/arrington.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/caa.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/sequoia.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/coinbase.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/andreessen-h.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/blockchange.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/hack-vc.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/ideo.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/pantera.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/polychain-capital.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/tq-ventures.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/variant.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="h-[100px] w-[210px] mr-6 border border-gray-400 rounded-[14.5px]">
                        <img
                            className="filter invert"
                            src="deso/investor_list/wrinklevoss.svg"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InvestorList;

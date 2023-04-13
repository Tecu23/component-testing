import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <div className="mb-10">
            <div>
                <img
                    className="absolute top-0 right-0"
                    src="deso/gradient_background.avif"
                ></img>
            </div>
            <div className="relative h-[740px] flex justify-center items-center">
                <div className="grid items-center grid-cols-8 gap-2 mx-4 justify-items-center">
                    <div className="col-start-1 col-span-full w-[309px] h-[116.875px] mb-10">
                        <div className=" mx-[67px] mb-4 pl-2.5 flex items-center">
                            <div className="w-10 mr-2 h-[1px] bg-gradient-to-r from-[#0157ff] to-[#02b0ff]"></div>
                            <p className="text-[6px] font-bold leading-[8.3px] tracking-[1.56px] text-[#ffda59]">
                                CHAPTER 01: Welcome
                            </p>
                        </div>
                        <h1 className=" font-victor-narrow text-[45px] font-semibold leading-[50px] tracking-[-4px] text-white">
                            <span>
                                {"The "}
                                <i>{"Social Layer"}</i>
                                {" of "}
                            </span>
                            <span>
                                {"Crypto Has "}
                                <i>{"Arrived"}</i>
                            </span>
                        </h1>
                    </div>
                    <p className="col-start-2 col-span-6 mb-8 text-sm font-normal text-center text-white leading-[18px] -tracking-wide">
                        {
                            "DeSo is the first layer-1 blockchain built from the ground up to decentralize social media and scale storage-heavy app to billions of users. "
                        }
                        <a className="text-[#ffda59]">{"Read the vision."}</a>
                    </p>
                    <div className="flex items-center justify-center col-start-1 col-span-full">
                        <button className="flex justify-center items-center mr-1.5 py-2.5 px-6 bg-[#ffda59] text-[12px] font-medium leading-[16.6px] -tracking-tight rounded-lg">
                            Sign Up
                        </button>
                        <button className="flex justify-center items-center py-2.5 px-6 bg-transparent text-white text-[12px] font-medium leading-[16.6px] -tracking-tight rounded-lg border border-gray-400">
                            Start Building
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

import React from "react";

type Props = {};

const MessageSection = (props: Props) => {
    return (
        <>
            <div className="max-w-[360px] mx-4 pb-[83px] flex justify-center items-center">
                <h2 className=" font-victor-narrow non-italic text-[48.5px] font-semibold -tracking-[3.1px] leading-[43px] text-center text-white">
                    <span>
                        <i className="italic ">The first</i>
                        {" blockchain "}
                    </span>
                    <span>
                        that can
                        <i className="italic">{" disrupt "}</i>
                    </span>
                    <span>social media</span>
                </h2>
            </div>
            <section className="pb-[209px] w-full">
                <div className="flex flex-col items-center justify-center px-4 text-left">
                    <div className="mb-16  w-[260px]">
                        <h4 className="mb-3 text-xl font-medium text-white -tracking-wide font-victor-serif">
                            The only blockchain that can power storage-heavy
                            applications
                        </h4>
                        <p className="text-[12.5px] text-gray-300 font-normal -tracking-wide leading-[16.6px] text-left">
                            Social applications generate a lot of data, and
                            existing blockchains are not equipped to store &
                            index that data.
                        </p>
                    </div>
                    <div className="mb-16  w-[262px]">
                        <h4 className="mb-3 text-xl font-medium text-white -tracking-wide font-victor-serif">
                            DeSo unlocks the next frontier for blockchain
                            infrastructure
                        </h4>
                        <p className="text-[12.5px] text-gray-300 font-normal -tracking-wide leading-[16.6px] text-left">
                            DeSo was built from the ground up to scale one of
                            the biggest untapped markets for blockchain. Social
                            Media.
                        </p>
                    </div>
                    <div className="mb-16  w-[260px]">
                        <h4 className="mb-3 text-xl font-medium text-white -tracking-wide font-victor-serif">
                            100% open-source & 100% on-chain permissionless data
                        </h4>
                        <p className="text-[12.5px] text-gray-300 font-normal -tracking-wide leading-[16.6px] text-left">
                            100% of all code & data are completely open. All
                            posts and social graphs on DeSo stored directly
                            on-chain.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MessageSection;

import React from "react";

type Props = {};

const Chapter2 = (props: Props) => {
    return (
        <div className="relative z-0 bg-[#000818]">
            <div className="absolute top-0 object-cover">
                <img
                    src="deso/chapter_2_learn.avif"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <div className="relative pb-[253px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="pb-[33px] relative w-[254px]">
                        <div className=" h-[116.875px] mb-7">
                            <div className="-mt-7 mx-[40px] mb-4 pl-4 flex items-center">
                                <div className="w-10 mr-2 h-[1px] bg-gradient-to-r from-[#0157ff] to-[#02b0ff]"></div>
                                <p className="text-[6px] font-bold leading-[8.3px] tracking-[1.56px] text-[#ffda59]">
                                    CHAPTER 02: LEARN
                                </p>
                            </div>
                            <h1 className="text-center font-victor-narrow text-[45px] font-semibold leading-[50px] tracking-[-4px] text-white">
                                <span>
                                    {"Go "}
                                    <i>{"Beyond "}</i>
                                </span>
                                <span>{"DeFi with DeSo"}</span>
                            </h1>
                        </div>
                        <p className="px-3 text-[13px] text-gray-300 font-semibold -tracking-wide leading-[18px] text-center pb-2">
                            DeSo is the only blockchain that can power storage-
                            heavy (infinite-state) applications by combining
                            financial primitives with cheap content storage.
                        </p>
                    </div>
                    <button className="flex justify-center items-center mr-1.5 py-2.5 px-6 bg-[#ffda59] text-[12px] font-medium leading-[16.6px] -tracking-tight rounded-lg">
                        Build on DeSo
                    </button>
                </div>
            </div>
            <section className="relative">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-[125px] p-[25px] border border-gray-400 rounded-[15px] bg-[#000818a6] backdrop-blur-[12px]">
                        <div className="w-[264px]">
                            <div className="pb-[30px] mb-[30px] border-b border-gray-400">
                                <h4 className="mb-3 mr-[38px] text-[21px] font-medium text-white -tracking-wide font-victor-serif">
                                    DeFi blockchain are finite-state
                                </h4>
                                <p className="text-[12.5px] text-gray-300 font-medium -tracking-wide leading-[18px] text-left">
                                    Finite-state apps, like DeFi, use
                                    blockchains that can only power
                                    storage-light (finite-state) applications,
                                    where data and storage stay constant with
                                    each transaction. With this approach for
                                    social, every interaction - post, like,
                                    follow, etc - wourld cost you $0.15+.
                                </p>
                            </div>
                            <div className="mb-[11px]">
                                <h4 className="mb-3 mr-[38px] text-[21px] font-medium text-white -tracking-wide font-victor-serif">
                                    The DeSo blockchain is
                                    <i className="italic">
                                        {" infinite-state"}
                                    </i>
                                </h4>
                                <p className="text-[12.5px] text-gray-300 font-medium -tracking-wide leading-[18px] text-left">
                                    Infinite-state applications generate new
                                    data with every transaction that has to be
                                    stored and indexed. For example, social apps
                                    generate data with every post, like, follow,
                                    etc… DeSo is the only blockchain that can
                                    power next-gen applications like this.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[125px] p-[25px] border border-gray-400 rounded-[15px] bg-[#000818a6] backdrop-blur-[12px]">
                        <div className="w-[264px]">
                            <h4 className="mb-3 mr-[38px] text-[21px] font-medium text-white -tracking-wide font-victor-serif">
                                Compare the costs of storing 200 characters
                                <i className="italic">
                                    {" (less than a tweet)"}
                                </i>
                            </h4>
                            <div className=" p-3 mb-2 flex justify-start items-center bg-[#ffda59] rounded-[8px]">
                                <img
                                    src="deso/crypto_list_icons/deso-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-[13.5px] font-medium -tracking-wide leading-4">
                                        DeSo
                                    </h4>
                                    <p className="text-[12.5px] font-normal -tracking-tight leading-4">
                                        $0.0000017
                                    </p>
                                </div>
                            </div>
                            <div className=" p-3 mb-2 flex justify-start items-center rounded-[8px] border border-gray-500 ">
                                <img
                                    src="deso/crypto_list_icons/cardano-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-white text-[13.5px] font-medium -tracking-wide leading-4">
                                        Cardano
                                    </h4>
                                    <p className="text-white text-[12.5px] font-normal -tracking-tight leading-4">
                                        $0.15
                                    </p>
                                </div>
                            </div>
                            <div className=" p-3 mb-2 flex justify-start items-center rounded-[8px] border border-gray-500 ">
                                <img
                                    src="deso/crypto_list_icons/avalanche-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-white text-[13.5px] font-medium -tracking-wide leading-4">
                                        Avalanche
                                    </h4>
                                    <p className="text-white text-[12.5px] font-normal -tracking-tight leading-4">
                                        $0.19
                                    </p>
                                </div>
                            </div>
                            <div className=" p-3 mb-2 flex justify-start items-center rounded-[8px] border border-gray-500 ">
                                <img
                                    src="deso/crypto_list_icons/solana-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-white text-[13.5px] font-medium -tracking-wide leading-4">
                                        Solana
                                    </h4>
                                    <p className="text-white text-[12.5px] font-normal -tracking-tight leading-4">
                                        $0.27
                                    </p>
                                </div>
                            </div>
                            <div className=" p-3 mb-2 flex justify-start items-center rounded-[8px] border border-gray-500 ">
                                <img
                                    src="deso/crypto_list_icons/polygon-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-white text-[13.5px] font-medium -tracking-wide leading-4">
                                        Polygon
                                    </h4>
                                    <p className="text-white text-[12.5px] font-normal -tracking-tight leading-4">
                                        $0.45
                                    </p>
                                </div>
                            </div>
                            <div className=" p-3 mb-2 flex justify-start items-center rounded-[8px] border border-gray-500 ">
                                <img
                                    src="deso/crypto_list_icons/etheruem-logo.svg"
                                    width={"100%"}
                                    height={"100%"}
                                    className="object-contain w-[37.5px] rounded-[8px] mr-3"
                                />
                                <div className="flex flex-col items-start justify-center">
                                    <h4 className="text-white text-[13.5px] font-medium -tracking-wide leading-4">
                                        Ethereum
                                    </h4>
                                    <p className="text-white text-[12.5px] font-normal -tracking-tight leading-4">
                                        $78.75
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 mr-9 text-white text-[12.5px] font-medium tracking-tight leading-[16px]">
                                Read full details & calculations in our
                                <span className="text-[#ffda59]">
                                    {" published article "}
                                </span>
                                (see Appendix)
                            </div>
                        </div>
                    </div>
                    <div className="mb-[125px] p-[25px] border border-gray-400 rounded-[15px] bg-[#000818a6] backdrop-blur-[12px]">
                        <div className="w-[264px] flex flex-col">
                            <div className="mb-6 font-victor-serif text-[20.5px] font-semibold leading-[23px] -tracking-wide text-white text-left w-[80%]">
                                Content stored directly
                                <i className="italic">
                                    {" on the DeSo blockchain"}
                                </i>
                            </div>
                            <ul>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All profiles
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All posts, threads & comments
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All private messages between users
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All likes & follows
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All social token activity
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All social tipping activity
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All NFT minting & auction activity
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All token activity
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    On-chain order-book exchange
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All transfer activity
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    Links to all rich media (videos, images)
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All verifications and endorsements
                                </li>
                                <li className="text-white font-normal mb-2 text-[14px] leading-[18px] -tracking-wide text-left before:w-1 before:h-1 before:text-[#ffda59] before:mr-4 before:content-['•']">
                                    All images & videos (soon!)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pb-[167px] h-[380px]">
                <div className="grid grid-cols-8 gap-2 px-4">
                    <div className="col-span-2 col-start-2 mb-20">
                        <p className="mb-22 overflow-hidden text-[6px] font-bold tracking-widest text-left leading-[8px] text-[#ffda59]">
                            TRANSACTIONS
                        </p>
                        <h1 className=" font-victor-narrow text-[50px] font-semibold leading-[46px] -tracking-widest text-left text-white">
                            85m+
                        </h1>
                    </div>
                    <div className="col-span-3 col-start-5 pl-2 mb-20">
                        <p className="mb-22 overflow-hidden text-[6px] font-bold tracking-widest text-left leading-[8px] text-[#ffda59]">
                            WALLETS
                        </p>
                        <h1 className=" font-victor-narrow text-[50px] font-semibold leading-[46px] -tracking-widest text-left text-white">
                            2m
                        </h1>
                    </div>
                    <div className="col-span-3 col-start-2">
                        <p className="mb-22 overflow-hidden text-[6px] font-bold tracking-widest text-left leading-[8px] text-[#ffda59]">
                            TOTAL TXN VOLUME
                        </p>
                        <h1 className=" font-victor-narrow text-[50px] font-semibold leading-[46px] -tracking-widest text-left text-white">
                            $2b
                        </h1>
                    </div>
                    <div className="col-span-3 col-start-5 pl-2">
                        <p className="mb-22 overflow-hidden text-[6px] font-bold tracking-widest text-left leading-[8px] text-[#ffda59]">
                            CREATOR EARNINGS
                        </p>
                        <h1 className=" font-victor-narrow text-[50px] font-semibold leading-[46px] -tracking-widest text-left text-white">
                            $30m
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chapter2;

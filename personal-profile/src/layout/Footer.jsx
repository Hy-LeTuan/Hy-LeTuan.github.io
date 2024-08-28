import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="overflow-hidden clear-both w-full bg-neutral-800 text-white py-4 px-6 lg:px-9 lg:py-5 xl:py-10 xl:px-24">
            <div className="flex flex-col md:flex-row justify-between items-top gap-8 md:gap-32">
                <div className="flex flex-col gap-2 items-start md:gap-3 lg:gap-4 xl:gap-6 basis-3 flex-1">
                    <h3 className="">Contact me</h3>
                    <p>
                        I also work as a freelance developer to help you build
                        your website and grow your business. You can find me on
                        Fiverr and check out my gigs at{" "}
                        <a
                            href="https://www.fiverr.com/tuanhy_le?public_mode=true"
                            className="italic text-blue-400"
                        >
                            @tuanhy_le
                        </a>
                        .{" "}
                    </p>
                    <p>
                        Or, you can contact me thorugh my phone number:{" "}
                        <span className="text-blue-400 italic">
                            +84 908 124 035
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:gap-3 lg:gap-4 xl:gap-6 basis-3 flex-1">
                    <h3 className="">Source Code</h3>
                    <div>
                        <p>
                            This website is entirely open source! You can find
                            the source code for it here on this repository:{" "}
                            <a
                                href="https://github.com/Hy-LeTuan/Hy-LeTuan.github.io"
                                className="text-blue-400 hover:underline underline-offset-4"
                            >
                                Source Code
                            </a>
                        </p>
                    </div>
                    <p>
                        To make the website responsive, I also have desing files
                        for many screen sizes. You can find the original design
                        on Figma at this link:{" "}
                        <a
                            href="https://www.figma.com/design/lW4cexjjTae8wdPYTYhhPI/Personal-website?node-id=0-1&t=aIuyMq7IBc9j8uln-1"
                            className="text-blue-400 hover:underline underline-offset-4"
                        >
                            Original Designs
                        </a>
                    </p>
                </div>
                <div className="flex flex-col justify-start items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 basis-1 flex-1">
                    <h3 className="">Sitemap</h3>
                    <div className="w-2/3 border-[0.5px] border-white md:w-full"></div>
                    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 md:gap-y-6 xl:gap-x-12 xl:gap-y-8">
                        <div className="flex justfiy-start items-center gap-2 lg:gap-3 xl:gap-4">
                            <img
                                src="/src/assets/home.svg"
                                alt=""
                                className="w-4 h-4 xl:w-6 xl:h-6"
                            />
                            <h4 className="hover:text-blue-400">
                                <Link to={"/"}>Home</Link>
                            </h4>
                        </div>
                        <div className="flex justfiy-start items-center gap-2 lg:gap-3 xl:gap-4">
                            <img
                                src="/src/assets/profile.svg"
                                alt=""
                                className="w-4 h-4 xl:w-6 xl:h-6"
                            />
                            <h4 className="hover:text-blue-400">
                                <Link to={"/portfolio"}>Portfolio</Link>
                            </h4>
                        </div>
                        <div className="flex justfiy-start items-center gap-2 lg:gap-3 xl:gap-4">
                            <img
                                src="/src/assets/active.svg"
                                alt=""
                                className="w-4 h-4 xl:w-6 xl:h-6"
                            />
                            <h4 className="hover:text-blue-400">
                                <Link to={"/active"}>Active</Link>
                            </h4>
                        </div>
                        <div className="flex justfiy-start items-center gap-2 lg:gap-3 xl:gap-4">
                            <img
                                src="/src/assets/blog.svg"
                                alt=""
                                className="w-4 h-4 xl:w-6 xl:h-6"
                            />
                            <h4 className="hover:text-blue-400">
                                <Link to={"/blogs"}>Blogs</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-[0.5px] w-full border-white/50 my-10 md:my-12 xl:my-20"></div>
            <div className="relative z-10 flex justify-start items-center gap-8 lg:gap-16 xl:gap-20">
                <a
                    href="https://github.com/Hy-LeTuan"
                    className="transition-transform duration-300 hover:scale-125"
                >
                    <img
                        src={`/src/assets/github.svg`}
                        alt="github link"
                        className="media-icon"
                    />
                </a>
                <a
                    href="mailto:letuanhy1507@gmail.com"
                    className="transition-transform duration-300 hover:scale-125"
                >
                    <img
                        src={`/src/assets/email.svg`}
                        alt="email link"
                        className="media-icon"
                    />
                </a>
                <a
                    href="https://www.facebook.com/hy.le.148553/"
                    className="transition-transform duration-300 hover:scale-125"
                >
                    <img
                        src={`/src/assets/facebook.svg`}
                        alt="facebook link"
                        className="media-icon"
                    />
                </a>
                <a
                    href="https://www.youtube.com/@B--LeTuanHy"
                    className="transition-transform duration-300 hover:scale-125"
                >
                    <img
                        src={`/src/assets/youtube.svg`}
                        alt="youtube link"
                        className="media-icon"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;

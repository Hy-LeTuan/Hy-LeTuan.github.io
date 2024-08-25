import React, { useState, useEffect } from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import chartStats from "/src/data/home/stats.json";
import checkpoint from "/src/data/home/checkpoint.json";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";

function Home() {
    const [bodyFontSize, setBodyFontSize] = useState(14);
    const [headerFontSize, setHeaderFontSize] = useState(16);

    const [axesSpacing, setAxesSpacing] = useState(24);
    const [titleSpacing, setTitleSpacing] = useState(8);

    const [leftCardOpen, setLeftCardOpen] = useState(true);
    const [rightCardOpen, setRightCardOpen] = useState(false);

    const onScreenSizeChange = () => {
        const width = window.innerWidth;

        if (width < 768) {
            // set font size
            setBodyFontSize(14);
            setHeaderFontSize(16);

            // set spacing
            setAxesSpacing(8);
            setTitleSpacing(8);
        } else if (width >= 1024 && width < 1280) {
            // set font size
            setBodyFontSize(16);
            setHeaderFontSize(20);

            // set spacing
            setAxesSpacing(20);
            setTitleSpacing(12);
        } else if (width >= 1280) {
            // set font size
            setBodyFontSize(20);
            setHeaderFontSize(30);

            // set spacing
            setAxesSpacing(24);
            setTitleSpacing(16);
        }
    };

    const options = {
        elements: {
            point: {
                radius: 3,
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        fmily: "Montserrat, sans-serif",
                        size: `${bodyFontSize}px`,
                    },
                },
            },
            title: {
                display: true,
                text: "Number of CP problems solved",
                position: "bottom",
                align: "center",
                font: {
                    family: "Montserrat, sans-serif",
                    size: `${headerFontSize}px`,
                },
                color: "#000",
                padding: {
                    top: `${titleSpacing}`,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        family: "Montserrat, sans-serif",
                        size: `${bodyFontSize}px`,
                    },
                    padding: axesSpacing,
                },
            },
            y: {
                ticks: {
                    font: {
                        family: "Montserrat, sans-serif",
                        size: `${bodyFontSize}px`,
                    },
                    padding: axesSpacing,
                },
            },
        },
    };

    const onDynamicCardMouseHover = (event) => {
        const id = event.currentTarget?.id;

        if (id == "left-card") {
            setLeftCardOpen(true);
            setRightCardOpen(false);
        } else if (id == "right-card") {
            setRightCardOpen(true);
            setLeftCardOpen(false);
        }
    };

    useEffect(() => {
        onScreenSizeChange();
        window.addEventListener("resize", onScreenSizeChange);

        return () => {
            window.removeEventListener("resize", onScreenSizeChange);
        };
    }, []);

    return (
        <>
            <section className="relative overflow-hidden clear-both w-full bg-primary">
                <div className="main-banner">
                    <div className="relative z-10 rounded-full w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 bg-secondary"></div>
                    <div className="biography">
                        <h1 className="display">Hey, I'm Le Tuan Hy</h1>
                        <h4>Studet, Developer, Sportstes</h4>
                    </div>
                    <hr className="banner-hr" />
                    {MediaHeader(".")}
                    {SquareAnimation(null)}
                </div>
            </section>
            <section className="section-container px-8 bg-white">
                <div className="title-subtitle-cluster">
                    <h5 className="text-neutral-400">WELCOME</h5>
                    <h1 className="">
                        Let me <br className="md:hidden lg:block xl:hidden" />{" "}
                        show you around
                    </h1>
                </div>
                <div className="main-section mt-12 gap-9 lg:mt-20 lg:gap-11 xl:mt-24 xl:gap-14">
                    <div className="flex flex-col md:flex-row justifiy-center items-stretch gap-8">
                        <div
                            className="card relative bg-primary overflow-hidden py-0 px-0 grow-1 md:data-[open]:w-full md:data-[close]:w-1/2 group transition-all duration-500"
                            id="left-card"
                            onMouseEnter={(e) => onDynamicCardMouseHover(e)}
                            data-open={leftCardOpen ? "" : undefined}
                            data-close={leftCardOpen ? undefined : ""}
                        >
                            <div className="m-0 py-0 px-0 md:px-12 h-full flex flex-col md:flex-row md:justify-between">
                                <img
                                    src="/src/assets/images/profile_picture.png"
                                    alt="Profile picture"
                                    className="basis-0 object-fit w-full md:w-2/5 md:absolute md:right-0 md:group-data-[open]:opacity-100 md:group-data-[close]:opacity-0 md:data-[close]:hidden md:transition-opacity"
                                />
                                <div className="px-6 py-8 max-w-[500px] gap-4 h-full flex flex-col justify-center items-start">
                                    <header className="flex flex-col gap-3 lg:gap-6">
                                        <img
                                            src="/src/assets/page-icons/square_up_right_white.svg"
                                            className="w-6 h-7 lg:w-8 lg:h-9 xl:w-9 xl:h-10"
                                        />
                                        <h2 className="text-left text-white">
                                            Who Am I
                                        </h2>
                                    </header>
                                    <div className="card-body-single-column gap-6 xl:gap-10 xl:mt-10">
                                        <p className="text-left text-white group-data-[close]:delay-200 md:group-data-[open]:delay-75 transition-all md:group-data-[close]:translate-y-40 duration-300">
                                            Hi there, my name is Tuan Hy and I
                                            just have a passion for computer
                                            from Vietnam.
                                        </p>
                                        <footer className="flex flex-col gap-4 md:gap-6 justify-center items-start md:group-data-[open]:opacity-100 md:group-data-[close]:opacity-0 transition-opacity ease-out md:group-data-[open]:delay-200 md:group-data-[close]:delay-75 duration-300">
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <img
                                                    src="/src/assets/page-icons/checkbox.svg"
                                                    className="w-3 h-3 md:w-5 md:h-5"
                                                />
                                                <p className="text-neutral-400 text-xs text-left lg:text-sm xl:text-xl">
                                                    I’m currently working
                                                    towards my dream of being a
                                                    computer scientist.
                                                </p>
                                            </div>
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <img
                                                    src="/src/assets/page-icons/checkbox.svg"
                                                    className="w-3 h-3 md:w-5 md:h-5"
                                                />
                                                <p className="text-neutral-400 text-xs text-left lg:text-sm xl:text-xl">
                                                    Apart from programming, I
                                                    also love designing
                                                    websites, playing music and
                                                    sending tennis balls flying.
                                                </p>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card relative bg-white border-[0.5px] border-black overflow-hidden py-0 px-0 grow-1 group/right-card md:data-[open]:w-full md:data-[close]:w-1/2 transition-all duration-500"
                            id="right-card"
                            onMouseEnter={(e) => onDynamicCardMouseHover(e)}
                            data-open={rightCardOpen ? "" : undefined}
                            data-close={rightCardOpen ? undefined : ""}
                        >
                            <div className="m-0 p-0 px-0 md:px-12 h-full flex flex-col md:flex-row md:justify-between">
                                <img
                                    src="/src/assets/images/about_this_site_illustration.png"
                                    alt="About this site illustration"
                                    className="basis-0 object-fit md:w-1/2 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 md:group-data-[close]/right-card:hidden"
                                />
                                <div className="px-6 py-8 max-w-[500px] gap-4 h-full flex flex-col justify-center items-start">
                                    <header className="flex flex-col gap-3 lg:gap-6">
                                        <img
                                            src="/src/assets/page-icons/square_up_right_black.svg"
                                            className="w-6 h-7 lg:w-8 lg:h-9 xl:w-9 xl:h-10"
                                        />
                                        <h2 className="text-left text-black">
                                            About This Site
                                        </h2>
                                    </header>
                                    <div className="card-body-single-column gap-6 xl:gap-10 xl:mt-10">
                                        <p className="text-left group-data-[close]/right-card:delay-200 md:group-data-[open]/right-card:delay-75 transition-all md:group-data-[close]/right-card:translate-y-40 duration-300">
                                            This is my own portfolio page, where
                                            I show off my passion for
                                            programming.
                                        </p>
                                        <footer className="flex flex-col gap-4 md:gap-6 justify-center items-start md:group-data-[open]/right-card:opacity-100 md:group-data-[close]/right-card:opacity-0 transition-opacity ease-out md:group-data-[open]/right-card:delay-200 md:group-data-[close]/right-card:delay-75 duration-300">
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <img
                                                    src="/src/assets/page-icons/checkbox.svg"
                                                    className="w-3 h-3 md:w-5 md:h-5"
                                                />
                                                <p className="text-neutral-700 text-xs text-left lg:text-sm xl:text-xl">
                                                    The Profile page contains
                                                    projects that have fulfilled
                                                    their main purposeses.
                                                </p>
                                            </div>
                                            <div className="flex flex-row gap-4 justify-center items-center">
                                                <img
                                                    src="/src/assets/page-icons/checkbox.svg"
                                                    className="w-3 h-3 md:w-5 md:h-5"
                                                />
                                                <p className="text-neutral-700 text-xs text-left lg:text-sm xl:text-xl">
                                                    The Active page contains
                                                    projects that are currently
                                                    worked on to fulfill their
                                                    main purposes.
                                                </p>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-container bg-neutral-100">
                <div className="w-full m-0 p-0 md:w-3/4 md:mx-auto">
                    <div className="title-subtitle-cluster">
                        <h5 className="text-neutral-400 text-left">
                            Programming Statistics
                        </h5>
                        <h1 className="text-left">
                            How about some coding statistics?
                        </h1>
                    </div>
                    <div className="main-section gap-9 mt-12 lg:mt-18 xl:mt-24 xl:gap-20">
                        <Line
                            data={chartStats}
                            options={options}
                            className="justify-self-center self-center w-full"
                        />
                        <div className="flex flex-col gap-4 md:gap-6 lg:mt-4 lg:gap-6 xl:gap-10">
                            <div className="flex justify-between items-center pt-1 pb-3 border-black border-b-[0.5px] lg:pb-3 xl:pb-8">
                                <h4 className="text-accent">1003</h4>
                                <h4>Lines of code written this year</h4>
                            </div>
                            <div className="flex justify-between items-center pt-1 pb-3 border-black border-b-[0.5px] lg:pb-3 xl:pb-8">
                                <h4 className="text-accent">1003</h4>
                                <h4>Days of continuous programming</h4>
                            </div>
                            <div className="flex justify-between items-center pt-1 pb-3 border-black border-b-[0.5px] lg:pb-3 xl:pb-8">
                                <h4 className="text-accent">1003</h4>
                                <h4>Bugs encountered and solved</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-container bg-primary">
                <div className="title-subtitle-cluster">
                    <h5 className="text-neutral-400">Journey Checkpoints</h5>
                    <h1 className="text-white">
                        My memorable coding checkpoints
                    </h1>
                </div>
                <div className="main-section mt-12 xl:mt-32">
                    <div className="m-0 p-0 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:gap-x-10 lg:gap-y-12 xl:gap-x-12 xl:gap-y-20">
                        {checkpoint?.checkpoints.map((c, index) => (
                            <div key={index}>
                                <Disclosure>
                                    <div className="flex gap-4 xl:gap-6 items-center justify-between md:col-span-1">
                                        <img
                                            src="/src/assets/mark_location.svg"
                                            alt="Location mark icon"
                                            className="w-6 h-7 xl:w-8 xl:h-9"
                                        />
                                        <DisclosureButton className="flex flex-grow items-center justify-between px-4 py-1 bg-white/5 rounded-lg group data-[active]:bg-white/10 xl:py-4 xl:px-8">
                                            <h4 className="text-white">
                                                {c.title}
                                            </h4>
                                            <img
                                                src="/src/assets/angle_down.svg"
                                                alt="Angle down icon"
                                                className="-rotate-90 w-8 group-data-[open]:rotate-0 transition-transform duration-200 xl:w-8 xl:h-8"
                                            />
                                        </DisclosureButton>
                                    </div>
                                    <DisclosurePanel
                                        className="dialogue-box data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[closed]:scale-90"
                                        transition
                                    >
                                        <p>{c.description}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

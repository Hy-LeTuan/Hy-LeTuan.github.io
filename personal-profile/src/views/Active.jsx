import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import projectList from "../data/portfolio/projectList.json";

function Active() {
    const [projects, setProjects] = useState(projectList.projects);

    const [doubleCol, setDoubleCol] = useState(false);

    const checkScreenSize = () => {
        const width = window.innerWidth;

        if (width < 768) {
            setDoubleCol(false);
        } else {
            setDoubleCol(true);
        }

        console.log(doubleCol);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <>
            <section className="relative overflow-hidden clear-both w-full bg-primary">
                <div className="main-banner">
                    <h1 className="display">Active Projects</h1>
                    <hr className="banner-hr" />
                    {MediaHeader(".")}
                    {SquareAnimation(null)}
                </div>
            </section>

            <section className="section-container">
                <div className="w-full m-0 p-0 xl:w-3/4 xl:mx-auto">
                    <div className="title-subtitle-cluster">
                        <h5 className="text-neutral-400">Project List</h5>
                        <h1>Actively worked on projects</h1>
                    </div>
                    <div className="main-section gap-16 mt-12 place-items-center md:mt-16 md:grid md:grid-cols-2 md:gap-y-16 md:gap-x-5 lg:gap-x-10 lg:gap-y-20 lg:mt-24 xl:mt-28 xl:gap-x-12 xl:gap-y-24 xl:">
                        {projects?.map((project, index) => (
                            <div
                                className={
                                    doubleCol
                                        ? index % 2 === 0
                                            ? "card bg-wave-pattern bg-cover bg-no-repeat place-self-end shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
                                            : "card bg-wave-pattern bg-cover bg-no-repeat place-self-start shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
                                        : "card bg-wave-pattern bg-cover bg-no-repeat shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
                                }
                                key={index}
                            >
                                <div className="card-body-single-column gap-8 lg:gap-9 xl:gap-12">
                                    <div className="w-full flex justify-center items-center">
                                        <div className="rounded-full w-32 h-32 xl:w-44 xl:h-44 bg-secondary"></div>
                                    </div>
                                    <div className="flex flex-col gap-4 lg:gap-6">
                                        <h2 className="text-left text-white">
                                            Title: {project.title}
                                        </h2>
                                        <p className="text-left text-white line-clamp-4">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="project-card-stats">
                                        <ul className="text-xs text-left text-neutral-200 lg:text-sm xl:text-xl">
                                            <li>
                                                Date started:{" "}
                                                {project.statistics?.date}
                                            </li>
                                            <li>
                                                No. of collaborators:{" "}
                                                {
                                                    project.statistics
                                                        ?.collaborators
                                                }
                                            </li>
                                        </ul>
                                        <ul className="text-xs text-left text-neutral-200 lg:text-sm xl:text-xl">
                                            <li>
                                                Project length:{" "}
                                                {project.statistics?.length}h
                                            </li>
                                            <li>
                                                Project status:{" "}
                                                {project.statistics.status}
                                            </li>
                                        </ul>
                                    </div>
                                    <button
                                        className="btn btn-card-footer"
                                        type="button"
                                    >
                                        <Link to={`/active/${index}`}>
                                            <h5 className="text-white">
                                                Details here
                                            </h5>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Active;

import "../css/routes/Index.css";
import "../css/routes/Projects.css";
import { useNavigate } from "react-router";

function Projects() {
    const navigator = useNavigate();

    return (
        <main className="project">
            <div className="project-main">
                <div className="project-main__row">
                    <div className="flex-col justify-start items-start gap-5">
                        <div className="flex-col justify-start items-start gap-0">
                            <h3 className="color-teal">RotCAtt-TransUNet++</h3>
                            <h6 className="color-teal">Research Projects</h6>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>General info</h5>
                            <div>
                                <div>
                                    Research Link - <a href="https://github.com/VISEF-ISEF-team/VasculAR" className="external-link">Link Here</a>
                                </div>
                                <div>Collaboration @ <b>ISEF Project</b></div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Short Description</h5>
                            <div>
                                Designed and developed a novel segmentation model to improve accuracy in cardiovascular scan analysis and disease detection.
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Tech Stack</h5>
                            <div className="flex-row gap-2">
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/python.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/numpy.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/pytorch.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="button button--small bg-teal transition flex-row items-center justify-center gap-0"
                            onClick={() =>
                                navigator("/projects/rot")
                            }>
                            <b>
                                Explore
                            </b>
                            <img
                                src="/src/assets/icons/arrow-up-right.svg"
                                alt=""
                                className="icon icon-base"
                            />
                        </button>
                    </div>
                    <div>
                        <img src="/src/assets/images/rot/rot-model.png" alt="" className="project-main__row__image"/>
                    </div>
                </div>
                <hr className="hr-block hr-primary"/>
                <div className="project-main__row">
                    <div className="flex-col justify-start items-start gap-5">
                        <div className="flex-col justify-start items-start gap-0">
                            <h3 className="color-teal">VR Cardiac Visualizer</h3>
                            <h6 className="color-teal">Research Projects</h6>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>General info</h5>
                            <div>
                                <div>
                                    Research Link - <a href="https://youtu.be/LKWUu-36Ffo" className="external-link">Link Here</a>
                                </div>
                                <div>Collaboration @ <b>ISEF Project</b></div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Short Description</h5>
                            <div>
                                Developed a VR environment for intuitive dissection and annotation of 3D cardiovascular structures reconstructed from MRI or CT scans.
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Tech Stack</h5>
                            <div className="flex-row gap-2">
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/c-sharp.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/unity.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/python.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="button button--small bg-teal transition flex-row items-center justify-center gap-0"
                            onClick={() =>
                                navigator("/projects/rot")
                            }>
                            <b>
                                Explore
                            </b>
                            <img
                                src="/src/assets/icons/arrow-up-right.svg"
                                alt=""
                                className="icon icon-base"
                            />
                        </button>
                    </div>
                    <div>
                        <img src="/src/assets/images/isef-sim/vr-play.png" alt="" className="project-main__row__image"/>
                    </div>
                </div>
                <hr className="hr-block hr-primary"/>
                <div className="project-main__row">
                    <div className="flex-col justify-start items-start gap-5">
                        <div className="flex-col justify-start items-start gap-0">
                            <h3 className="color-teal"> CoTAI Bert Model</h3>
                            <h6 className="color-teal">Research Project</h6>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>General info</h5>
                            <div>
                                <div>
                                    Research Link - <a href="https://github.com/Hy-LeTuan/CoTAI-Bert" className="external-link">Link Here</a>
                                </div>
                                <div>Collaboration: Intern @ <b><a href="https://cot.ai/">CoTAI</a></b></div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Short Description</h5>
                            <div>
                                Designed a lightweight encoder model for bilingual online text processing and encoding, focusing on Vietnamese and English speeches.
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Tech Stack</h5>
                            <div className="flex-row gap-2">
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/pytorch.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/numpy.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/apache-spark.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/python.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="button button--small bg-teal transition flex-row items-center justify-center gap-0"
                            onClick={() =>
                                navigator("/projects/rot")
                            }>
                            <b>
                                Explore
                            </b>
                            <img
                                src="/src/assets/icons/arrow-up-right.svg"
                                alt=""
                                className="icon icon-base"
                            />
                        </button>
                    </div>
                    <div>
                        <img src="/src/assets/images/cotai-bert/model-architecture.png" alt="" className="project-main__row__image"/>
                    </div>
                </div>
                <hr className="hr-block hr-primary"/>
                <div className="project-main__row">
                    <div className="flex-col justify-start items-start gap-5">
                        <div className="flex-col justify-start items-start gap-0">
                            <h3 className="color-orange">TT Pottery</h3>
                            <h6 className="color-orange">Development Project</h6>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>General info</h5>
                            <div>
                                <div>
                                    Development Link - <a href="https://www.ttpottery.com/" className="external-link">Link Here</a>
                                </div>
                                <div>Collaboration: Freelancer @ <b>Fiverr</b></div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Short Description</h5>
                            <div>
                                Designed a lightweight encoder model for bilingual online text processing and encoding, focusing on Vietnamese and English speeches.
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2">
                            <h5>Tech Stack</h5>
                            <div className="flex-row gap-2">
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/pytorch.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/numpy.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/apache-spark.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                                <div className="card-icon">
                                    <img
                                        src="/src/assets/icons/python.svg"
                                        alt="PyTorch icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="button button--small bg-orange transition flex-row items-center justify-center gap-0"
                            onClick={() =>
                                navigator("/projects/rot")
                            }>
                            <b>
                                Explore
                            </b>
                            <img
                                src="/src/assets/icons/arrow-up-right.svg"
                                alt=""
                                className="icon icon-base"
                            />
                        </button>
                    </div>
                    <div>
                        <img src="/src/assets/images/tt-pottery/offer-feature-section.png" alt="" className="project-main__row__image"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Projects;

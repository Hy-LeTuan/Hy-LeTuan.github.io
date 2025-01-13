import "../css/routes/Index.css"
import "../css/routes/About.css"
import { motion } from "motion/react";

function About() {
    return (
        <main>
            <div className="flex-row justify-center items-center about gap-10">
                <div className="flex-col about-content justify-start items-start gap-3">
                    <h1 className="about-content__header fs-6">
                        Crafting <span className="color-orange"><b>functional</b></span>, <span className="color-teal"><b>elegant</b></span>, and <span className="color-blue"><b>reliable</b></span> solutions through code.
                    </h1>
                    <div className="about-content__content">
                        <p>
                            As a Software & Machine Learning engineer, I can bring you the efficiency of great software designs inside complex AI systems
                        </p>
                    </div>
                </div>
                <img
                    src="/src/assets/images/profile-image.png"
                    alt=""
                    className="hero-image hero-image--image-clear"
                />
            </div>
            <section>
                <div className="about-main">
                    <hr className="hr-block hr-primary"/>
                    <div className="about-main__content flex-col gap-10">
                        <div className="flex-row items-center justify-between">
                            <h1 className="font-header">I can provide you quality services regarding</h1>
                            <motion.button 
                                initial={{backgroundColor: "#1a1a2e", x: 0}}
                                whileHover={{backgroundColor: "#5a5ca3", x: 30, transition: {
                                    type: "spring",
                                    duration: 0.8,
                                    bounce: 0.65,
                                }}}
                                className="about-main__content__button"
                            ><h5>See my past works</h5>
                            </motion.button>
                        </div>
                        <div className="flex-row gap-10 w-full items-start justify-between">
                            <div className="flex-col justify-start items-start gap-2">
                                <h3 className="font-header color-teal">SOFTWARE</h3>
                                <div>
                                    I deliver efficient, scalable software and websites tailored to your business needs. My expertise spans web frameworks like Next.js and React.js, as well as native application UIs in C++.
                                </div>
                            </div>
                            <hr className="vertical-bar vertical-bar--secondary" />
                            <div className="flex-col justify-start items-start gap-2">
                                <h3 className="font-header color-teal">ML & DL</h3>
                                <div>
                                    I develop advanced AI solutions to tackle your challenges. My specialties lie in Computer Vision and Natural Language Processing, ensuring cutting-edge performance.
                                </div>
                            </div>
                            <hr className="vertical-bar vertical-bar--secondary" />
                            <div className="flex-col justify-start items-start gap-2">
                                <h3 className="font-header color-teal">DESIGN</h3>
                                <div>
                                    Beyond technical expertise, I strive to create contemporary designs that align with your brand identity and resonate with your target audience.
                                </div>
                            </div>
                        </div>
                        <div className="flex-row justify-center items-center gap-2 w-full">
                            <button className="button button--no-wrap button--medium button--border-accent-orange">
                                <h5>
                                    Send me a message on Fiverr
                                </h5>
                            </button>
                            <hr className="hr-block hr-primary"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;

import React from "react";

function MediaHeader(relativity = ".") {
    return (
        <div
            id="social-icon"
            className="relative z-10 flex justify-center items-center gap-4 lg:gap-6 xl:gap-12"
        >
            <a href="https://github.com/Hy-LeTuan" className="transition-transform duration-300 hover:scale-125">
                <img
                    src={`${relativity}/src/assets/github.svg`}
                    alt="github link"
                    className="media-icon"
                />
            </a>
            <a href="mailto:letuanhy1507@gmail.com" className="transition-transform duration-300 hover:scale-125">
                <img
                    src={`${relativity}/src/assets/email.svg`}
                    alt="email link"
                    className="media-icon"
                />
            </a>
            <a
                href="https://www.facebook.com/hy.le.148553/"
                className="transition-transform duration-300 hover:scale-125"
            >
                <img
                    src={`${relativity}/src/assets/facebook.svg`}
                    alt="facebook link"
                    className="media-icon"
                />
            </a>
            <a
                href="https://www.youtube.com/@B--LeTuanHy"
                className="transition-transform duration-300 hover:scale-125"
            >
                <img
                    src={`${relativity}/src/assets/youtube.svg`}
                    alt="youtube link"
                    className="media-icon"
                />
            </a>
        </div>
    );
}

export default MediaHeader;

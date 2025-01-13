import "../css/routes/Index.css"
import "../css/routes/About.css"

function About() {
    return (
		<div className="flex-row justify-center items-center about">
			<div className="flex-col about-content">
				<h1 className="title title--largest">
                    Crafting functional, elegant, and reliable solutions through code.
				</h1>
			</div>
			<img
				src="/src/assets/images/profile-image.png"
				alt=""
				className="hero-image hero-image--image-clear"
			/>
		</div>
    );
}

export default About;

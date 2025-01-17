import "../css/components/Footer.css";
import { Link } from "react-router";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__main__col">
					<h5>Le Tuan Hy</h5>
					<div className="footer__main__col__catch-phrase">
						Deliverying quality engineering feats and researches
					</div>
				</div>
				<div className="footer__main__col">
					<h5>Resources</h5>
					<div className="footer__main__col__content">
						<div className="flex-row gap-3 justify-center items-center">
							<div>
								<Link to={"/"}>Home</Link>
							</div>
							<div>
								<Link to={"/about-me"}>About me</Link>
							</div>
						</div>
						<div className="flex-row gap-3 justify-center items-center">
							<div>
								<Link to={"/contact"}>Contact</Link>
							</div>
							<div>
								<Link to={"/projects"}>Projects</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__main__col">
					<h5>Check out my socials</h5>
					<div className="footer__main__col__content footer__main__col__content--gap-large">
						<div className="flex-row gap-3 justify-center items-center">
							<div className="flex-row justify-center items-center gap-1">
								<img
									src="/src/assets/icons/linkedin.svg"
									alt=""
									className="icon icon-base"
								/>
								<p>LinkedIn</p>
							</div>
							<div className="flex-row justify-center items-center gap-1">
								<img
									src="/src/assets/icons/github.svg"
									alt=""
									className="icon icon-base"
								/>
								<p>Github</p>
							</div>
						</div>
						<div className="flex-row gap-3 justify-center items-center">
							<div className="flex-row justify-center items-center gap-1">
								<img
									src="/src/assets/icons/youtube.svg"
									alt=""
									className="icon icon-base"
								/>
								<p>Youtube</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__main__col">
					<h5>Reach out to me here!</h5>
					<div className="footer__main__col__content">
						<div>
							<a href="mailto:letuanhy1507@gmail.com">
								letuanhy1507@gmail.com
							</a>
						</div>
						<div>(1) 626 242 0611</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;

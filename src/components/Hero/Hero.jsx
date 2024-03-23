import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeroImg from "../../assets/strawberry.png";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<main className="bg-primaryDark md:py-6 md:px-12">
			<section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
				<div className="container">
					<Navbar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
						{/* text container */}
						<div className="p-4 space-y-4 text-white md:mt-0 mt-[100px]">
							<h1 data-aos="fade-up" className="pl-6 text-3xl md:pl-14">
								01_______
							</h1>
							<h1
								data-aos="fade-up"
								data-aos-delay="300"
								className="text-5xl font-bold uppercase text-shadow"
							>
								A healthy fruit
							</h1>
							<p data-aos="fade-up" data-aos-delay="600">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque nec lorem sit amet risus dignissim venenatis vel ac
								quam. Phasellus hendrerit est non iaculis tempus!
							</p>
							<button
								data-aos="fade-up"
								data-aos-delay="900"
								className="px-4 py-2 border border-white rounded-lg"
							>
								Shop Now
							</button>
						</div>
						{/* image container */}
						<div>
							<img
								data-aos="zoom-in"
								src={HeroImg}
								alt="Not found"
								className="w-[400px] img-shadow relative z-[1]"
							/>
						</div>
						{/* blank container */}
						<div className="md:hidden"></div>
					</div>
				</div>
				<h1
					data-aos="zoom-out"
					className="text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md:text-[150px] xl:md-[180px] absolute bottom-0 w-full z-0 text-shadow"
				>
					berries
				</h1>
				{sidebar && (
					<div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
						<div className="flex flex-col items-center justify-center w-full h-full gap-6">
							{/* Lining */}
							<div className="w-[1px] h-[70px] bg-white"></div>
							{/* social media links */}
							<div className="inline-block p-2 text-white border border-white rounded-full cursor-pointer">
								<FaFacebook className="text-2xl" />
							</div>
							<div className="inline-block p-2 text-white border border-white rounded-full cursor-pointer">
								<FaLinkedin className="text-2xl" />
							</div>
							<div className="inline-block p-2 text-white border border-white rounded-full cursor-pointer">
								<FaInstagram className="text-2xl" />
							</div>
							{/* Lining */}
							<div className="w-[1px] h-[70px] bg-white "></div>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default Hero;

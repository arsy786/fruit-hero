import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const Navbar = ({ sidebar, setSidebar }) => {
	return (
		<div className="absolute top-0 left-0 z-20 w-full py-2 text-white">
			<div data-aos="fade-down" className="container">
				<div className="flex items-center justify-between">
					<h1 className="text-4xl font-bold uppercase ">
						Straw<span className="font-normal ">Berries</span>
					</h1>
					<ul className="hidden text-xl space-x-14 lg:flex">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Where to find</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<div onClick={() => setSidebar(!sidebar)}>
						<GiHamburgerMenu className="text-3xl cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

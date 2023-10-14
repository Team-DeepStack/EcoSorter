import { Footer } from 'flowbite-react';
import React, { Fragment } from 'react';
import recycle_illustration from '../assets/recycle_illustration.png';
import { BiRecycle } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { IoIosQrScanner } from 'react-icons/io';
import CardSlider from '../components/CardSlider';

function LandingPage() {
	return (
		<Fragment>
			<div className="grid grid-cols-2 justify-evenly min-h-[40vh] py-5 my-2 items-center gap-4">
				<div className="col-span-1 flex-col justify-center items-center px-5">
					<h1 className="text-6xl py-2 my-1 px-10 font-semibold break-words">
						Remember those three R's:
					</h1>
					<h3 className="text-3xl py-2 mb-3 px-10 font-bold">
						Reduce, <span className="text-[#3C91E6]">Reuse</span>,{' '}
						<span className="text-yellow-300">Recycle</span>
					</h3>
					<p className="text-lg py-2 my-2 px-10 break-words font-semibold">
						Let's make the planet clean and population healthy!
					</p>
				</div>
				<img
					src={recycle_illustration}
					className="col-span-1 max-w-lg"
					alt="here"
				/>
			</div>
			<div className="w-auto bg-[#3C91E6] my-5 py-4 flex-col justify-center">
				<h1 className="text-white text-4xl flex justify-center items-center py-5">
					Benefits of a Web Application
				</h1>
				<div className="grid grid-cols-3 place-items-center min-h-[50vh]">
					<div className="flex-col text-2xl text-white flex items-center justify-center">
						<div className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl">
							<FiMapPin className="text-5xl my-3" />
						</div>
						<p className="font-semibold my-5">Interactive Map</p>
						<p className="font-semibold my-2 text-base break-words">
							Get to know about the users around you!
						</p>
					</div>
					<div className="flex-col text-2xl text-white flex items-center justify-center">
						<div className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl">
							<IoIosQrScanner className="text-5xl my-3" />
						</div>

						<p className="font-semibold my-5">Recognition Function Care</p>
						<p className="font-semibold my-2 text-base break-words">
							Recognition of waste by scanning.
						</p>
					</div>
					<div className="flex-col text-2xl text-white flex items-center justify-center">
						<div className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl">
							<BiRecycle className="text-5xl my-3" />
						</div>

						<p className="font-semibold my-5">Waste Removal</p>
						<p className="font-semibold my-2 text-base break-words">
							Work towards a greener environment.
						</p>
					</div>
				</div>
			</div>
			<div className="my-10 min-h-[50vh] overflow-hidden">
				<h1 className="text-3xl mx-4 mb-10">Reviews</h1>
				<div>
					<CardSlider />
				</div>
			</div>
			<Footer container className="bg-[#3C91E6]">
				<div className="w-full">
					<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div>
							<Footer.Brand
								alt="Flowbite Logo"
								href="https://flowbite.com"
								name="Flowbite"
								src="https://flowbite.com/docs/images/logo.svg"
							/>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<Footer.Title title="about" />
								<Footer.LinkGroup col>
									<Footer.Link href="/">Flowbite</Footer.Link>
									<Footer.Link href="/">Tailwind CSS</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="Follow us" />
								<Footer.LinkGroup col>
									<Footer.Link href="/">Github</Footer.Link>
									<Footer.Link href="/">Discord</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="Legal" />
								<Footer.LinkGroup col>
									<Footer.Link href="/">Privacy Policy</Footer.Link>
									<Footer.Link href="/">Terms & Conditions</Footer.Link>
								</Footer.LinkGroup>
							</div>
						</div>
					</div>
					<Footer.Divider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<Footer.Copyright by="Flowbite™" href="/" year={2022} />
						<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
							<Footer.Icon href="/" icon={BsFacebook} />
							<Footer.Icon href="/" icon={BsInstagram} />
							<Footer.Icon href="/" icon={BsTwitter} />
							<Footer.Icon href="/" icon={BsGithub} />
						</div>
					</div>
				</div>
			</Footer>
		</Fragment>
	);
}

export default LandingPage;

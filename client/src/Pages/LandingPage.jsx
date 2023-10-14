import { Footer } from 'flowbite-react';
import React, { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import recycle_illustration from '../assets/recycle_illustration.png';
import { BiRecycle, BiSolidQuoteLeft } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { IoIosQrScanner } from 'react-icons/io';
import cards from '../utils/cardsInfo';
// import bill from "../assets/bill.jpg";
// import elon from "../assets/elon.jpg";
// import pichai from "../assets/pichai.jpg"
import CardSlider from '../components/CardSlider';

import { Card, Dropdown } from 'flowbite-react';

function LandingPage() {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: 'ref',
		offset: ['0 1', '0.5 1'],
	});
	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: 'ref2',
	});
	const y = useTransform(scrollYProgress1, [0, 1], ['0%', '50%']);
	const x = useTransform(scrollYProgress2, [0, 1], ['0%', '-10%']);

	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: -10,
		},
		visible: (custom) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.7 + 0.05 * custom,
			},
		}),
	};

	const Card = ({ card }) => {
		return (
			<div
				key={card.id}
				className="bg-white w-[350px] h-[250px] rounded-lg drop-shadow-lg m-3"
			>
				<div className=" p-4 flex items-center justify-evenly">
					<div className="flex gap-x-2">
						<img
							className="rounded-full h-10 w-10 mt-1"
							src={card.url}
							alt="krittibas"
						/>
						<div className="text-left">
							<h4 className="text-lg">{card.name}</h4>
							<p className="text-sm">Baby Carer</p>
						</div>
					</div>

					<div>
						<BiSolidQuoteLeft className="w-10 h-10" style={{ fill: 'grey' }} />
					</div>
				</div>
				<div className="text-center px-5 py-4">
					<p className="text-xs">{'"' + card.review + '"'}</p>
				</div>
			</div>
		);
	};
	return (
		<Fragment>
			<div className="grid grid-cols-2 justify-evenly min-h-[40vh] py-5 my-2 items-center gap-4">
				<div className="col-span-1 flex-col justify-center items-center px-5">
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							staggerChildren: 0.1,
							duration: 0.9,
							type: 'spring',
							stiffness: 120,
						}}
						className="text-6xl py-2 my-1 px-10 font-bold break-words"
					>
						Remember those three R's:
					</motion.h1>
					<h3 className="text-3xl py-2 mb-3 px-10 font-bold">
						<motion.div
							className="inline-block"
							initial={{ opacity: 0, x: -10, y: 10 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Reduce
						</motion.div>
						,
						<motion.span
							initial={{ opacity: 0, x: -10, y: 10 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-[#3C91E6] inline-block"
						>
							Reuse
						</motion.span>
						,{' '}
						<motion.span
							className="text-yellow-300 inline-block"
							initial={{ opacity: 0, x: -10, y: 10 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							Recycle
						</motion.span>
					</h3>
					<p className="text-lg py-2 my-2 px-10 break-words font-semibold">
						{[
							"Let's\u00a0",
							'make\u00a0',
							'the\u00a0',
							'planet\u00a0',
							'clean\u00a0',
							'and\u00a0',
							'population\u00a0',
							'healthy!',
						].map((el, index) => {
							return (
								<motion.span
									className="inline-block"
									key={index}
									variants={fadeInAnimationVariants}
									initial="initial"
									animate="visible"
									custom={index}
								>
									{el}
								</motion.span>
							);
						})}
					</p>
				</div>
				<motion.img
					initial={{
						x: 200,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						ease: 'easeOut',
						delay: 0.4,
						duration: 1,
						type: 'spring',
						stiffness: 100,
					}}
					src={recycle_illustration}
					className="col-span-1 max-w-lg"
					alt="here"
				/>
			</div>
			<div>
				<motion.div
					ref={ref}
					style={{ scale: scrollYProgress1, opacity: scrollYProgress1 }}
					className="w-auto bg-[#3C91E6] my-5 py-4 flex-col justify-center"
				>
					<h1 className="text-white text-4xl flex justify-center items-center py-5">
						Benefits of a Web Application
					</h1>
					<div className="grid grid-cols-3 place-items-center min-h-[50vh]">
						<motion.div className="flex-col text-2xl text-white flex items-center justify-center">
							<div className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl">
								<FiMapPin className="text-5xl my-3" />
							</div>
							<p className="font-semibold my-5">Interactive Map</p>
							<p className="font-semibold my-2 text-base break-words">
								Get to know about the users around you!
							</p>
						</motion.div>
						<motion.div className="flex-col text-2xl text-white flex items-center justify-center">
							<div className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl">
								<IoIosQrScanner className="text-5xl my-3" />
							</div>

							<p className="font-semibold my-5">Recognition Function Care</p>
							<p className="font-semibold my-2 text-base break-words">
								Recognition of waste by scanning.
							</p>
						</motion.div>
						<motion.div className="flex-col text-2xl text-white flex items-center justify-center">
							<div
								style={{ y }}
								className="bg-white bg-opacity-20 backdrop-blur-xl px-3 rounded-2xl"
							>
								<BiRecycle className="text-5xl my-3" />
							</div>

							<p className="font-semibold my-5">Waste Removal</p>
							<p className="font-semibold my-2 text-base break-words">
								Work towards a greener environment.
							</p>
						</motion.div>
					</div>
				</motion.div>
				<div className="my-10 min-h-[50vh] overflow-x-hidden flex-col items-center justify-center">
					<h1 className="text-4xl font-semibold mx-4 mb-10 flex justify-center">
						What do they say?
					</h1>
					{/* <div><CardSlider /></div> */}
					<div className="relative flex justify-center">
						<div className="flex items-center overflow-hidden">
							<motion.div
								ref={ref2}
								style={{ x }}
								className="flex justify-center w-[95vw] gap-4"
							>
								{cards.map((card) => {
									return <Card card={card} key={card.id} />;
								})}
							</motion.div>
						</div>
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
									<Footer.Title title="about" className="text-gray-700" />
									<Footer.LinkGroup col>
										<Footer.Link href="/" className="text-gray-600">
											Flowbite
										</Footer.Link>
										<Footer.Link href="/" className="text-gray-600">
											Tailwind CSS
										</Footer.Link>
									</Footer.LinkGroup>
								</div>
								<div>
									<Footer.Title title="Follow us" className="text-gray-700" />
									<Footer.LinkGroup col>
										<Footer.Link href="/" className="text-gray-600">
											Github
										</Footer.Link>
										<Footer.Link href="/" className="text-gray-600">
											Discord
										</Footer.Link>
									</Footer.LinkGroup>
								</div>
								<div>
									<Footer.Title title="Legal" className="text-gray-700" />
									<Footer.LinkGroup col>
										<Footer.Link href="/" className="text-gray-600">
											Privacy Policy
										</Footer.Link>
										<Footer.Link href="/" className="text-gray-600">
											Terms & Conditions
										</Footer.Link>
									</Footer.LinkGroup>
								</div>
							</div>
						</div>
						<Footer.Divider />
						<div className="w-full sm:flex sm:items-center sm:justify-between">
							<Footer.Copyright by="Eco Group" href="/" year={2023} />
							<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
								<Footer.Icon href="/" icon={BsFacebook} />
								<Footer.Icon href="/" icon={BsInstagram} />
								<Footer.Icon href="/" icon={BsTwitter} />
								<Footer.Icon href="/" icon={BsGithub} />
							</div>
						</div>
					</div>
				</Footer>
			</div>
		</Fragment>
	);
}

export default LandingPage;

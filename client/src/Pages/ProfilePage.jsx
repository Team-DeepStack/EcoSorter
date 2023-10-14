import React, { Fragment } from 'react';
import recycle_illustration from '../assets/recycle_illustration.png';
import { Badge } from 'flowbite-react';
import { FiMapPin } from 'react-icons/fi';
import { Tabs } from 'flowbite-react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdLeaderboard } from 'react-icons/md';
import ImageUploader from '../components/ImageUploader';
import Leaderboard from '../components/Leaderboard';

function ProfilePage() {
	return (
		<Fragment>
			<div className="grid grid-cols-4 gap-x-10">
				<div className="col-span-1 flex-col items-center justify-center">
					<img
						className="text-xs rounded-full"
						src={recycle_illustration}
						alt=""
					/>
					<p className="flex items-center justify-center text-xl pt-4">
						Ratul Saha
					</p>
					<p className="flex items-center justify-center text-xs pb-3">
						ratul.saha1995@gmail.com
					</p>
					<p className="flex items-center justify-center text-base py-2">
						Newtown, Kolkata
					</p>
					<span className="flex items-center justify-center">
						<Badge
							color="success"
							className="mt-5 flex justify-center items-center rounded-full"
						>
							Bio-degredable waste: 20
						</Badge>
					</span>
				</div>
				<div className="col-span-3 mt-10">
					<Tabs.Group aria-label="Tabs with underline" style="underline">
						<Tabs.Item active icon={AiOutlineCloudUpload} title="Uploader">
							<div className="flex flex-col">
								<p>
									Want to add more value to the society? Upload your waste and
									and let us guide you about its final destination!
								</p>
								<ImageUploader />
							</div>
						</Tabs.Item>

						<Tabs.Item icon={MdLeaderboard} title="Leaderboard">
							<Leaderboard />
							{/* <div className="flex justify-around items-center my-2">
								<img
									src={recycle_illustration}
									className="w-10 rounded-full"
									alt=""
								/>
								<p className="text-base">Yash Sharma</p>
								<p className="text-sm flex">
									<FiMapPin className="w-7 mt-1 text-[#05299E]" />
									Kolkata, West Bengal
								</p>
							</div>
							<div className="flex justify-around items-center my-2">
								<img
									src={recycle_illustration}
									className="w-10 rounded-full"
									alt=""
								/>
								<p className="text-base">Yash Sharma</p>
								<p className="text-sm flex">
									<FiMapPin className="w-7 mt-1 text-[#05299E]" />
									Kolkata, West Bengal
								</p>
							</div>
							<div className="flex justify-around items-center my-2">
								<img
									src={recycle_illustration}
									className="w-10 rounded-full"
									alt=""
								/>
								<p className="text-base">Yash Sharma</p>
								<p className="text-sm flex">
									<FiMapPin className="w-7 mt-1 text-[#05299E]" />
									Kolkata, West Bengal
								</p>
							</div>
							<div className="flex justify-around items-center my-2">
								<img
									src={recycle_illustration}
									className="w-10 rounded-full"
									alt=""
								/>
								<p className="text-base">Yash Sharma</p>
								<p className="text-sm flex">
									<FiMapPin className="w-7 mt-1 text-[#05299E]" />
									Kolkata, West Bengal
								</p>
							</div> */}
						</Tabs.Item>
					</Tabs.Group>
				</div>
			</div>
		</Fragment>
	);
}

export default ProfilePage;

import React, { Fragment } from 'react';
import recycle_illustration from '../assets/recycle_illustration.png';
import { Badge } from 'flowbite-react';
import { FiMapPin } from 'react-icons/fi';
import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import { IoIosQrScanner } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDashboard, MdLeaderboard } from 'react-icons/md';
import { CustomFlowbiteTheme } from 'flowbite-react';

function ProfilePage() {
	// const customTheme: CustomFlowbiteTheme['tabitem'] = {
	//     base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
	//   };
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
					{/* <div className='flex-col justify-ceter items-center w-[50vw]'>
                    <h1 className='text-4xl mb-10'>Leaderboard</h1>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7 mt-1 text-[#05299E]'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7 mt-1'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7 mt-1'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm flex'><FiMapPin className='w-7'/>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center w-auto my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm'>Kolkata, West Bengal</p>
                    </div>
                    <div className='flex justify-around items-center w-auto my-2'>
                        <img src={recycle_illustration} className='w-10 rounded-full' alt="" />
                        <p className='text-base'>Yash Sharma</p>
                        <p className='text-sm'>Kolkata, West Bengal</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl'>Scanner</h1>
                </div> */}

					<Tabs.Group
						// theme={customTheme}
						aria-label="Tabs with underline"
						style="underline"
					>
						<Tabs.Item
							active
							icon={AiOutlineCloudUpload}
							title="Uploader"
							className=""
						>
							<p>
								Want to add more value to the society? Upload your waste and and
								let us guide you about its final destination!
							</p>
						</Tabs.Item>
						<Tabs.Item icon={MdLeaderboard} title="Leaderboard">
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
						</Tabs.Item>
						{/* <Tabs.Item
        icon={HiAdjustments}
        title="Settings"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        icon={HiClipboardList}
        title="Contacts"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        disabled
        title="Disabled"
      >
        <p>
          Disabled content
        </p>
      </Tabs.Item> */}
					</Tabs.Group>
				</div>
			</div>
		</Fragment>
	);
}

export default ProfilePage;

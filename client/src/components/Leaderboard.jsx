import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchLeaderboardRoute } from '../utils/APIRoutes';

const trimWords = (str) => {
	if (str.length <= 30) return str;
	var trimmedString = str.substr(0, 30);
	trimmedString = trimmedString.substr(
		0,
		Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
	);
	return (trimmedString += '...');
};

const TableRow = ({ rank, name, contributions, location, pfp }) => {
	if (!name) return;
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				{rank}
			</th>
			<td className="px-6 py-4 flex items-center">
				<img
					src={pfp}
					alt=""
					className="w-8 h-8 bg-black rounded-full mr-2 flex justify-center items-center"
				/>
				<p>{name}</p>
			</td>
			<td className="px-6 py-4">{contributions}</td>
			<td className="px-6 py-4">{trimWords(location)}</td>
		</tr>
	);
};

const Leaderboard = () => {
	const [boardArray, setBoardArray] = useState([]);

	const fetchLeaderboard = useCallback(async () => {
		const { data } = await axios.get(fetchLeaderboardRoute);
		console.log('data: ', data);
		const dummyArray = data.map((item) => {
			return {
				name: item.name,
				contributions: item.waste.recyclable + item.waste.non_recyclable,
				location: item.address,
				pfp: item.pfp,
			};
		});
		setBoardArray(dummyArray);
	}, []);

	useEffect(() => {
		if (boardArray.length === 0) fetchLeaderboard();
	}, [fetchLeaderboard, boardArray]);

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Rank
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Contributions
						</th>
						<th scope="col" className="px-6 py-3">
							Location
						</th>
					</tr>
				</thead>
				<tbody>
					{boardArray.map((item, index) => (
						<TableRow key={index} rank={index + 1} {...item} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;

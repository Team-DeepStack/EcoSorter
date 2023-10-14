import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Reviews = [
	{
		name: 'John Doe',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aspernatur.',
		pfp: 'url',
	},
	{
		name: 'Sown Moe',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aspernatur.',
		pfp: 'url',
	},
	{
		name: 'Asmon Gold',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aspernatur.',
		pfp: 'url',
	},
	{
		name: 'Yasuo Main',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aspernatur.',
		pfp: 'url',
	},
];

const Card = (review) => {
	return (
		<div className="h-80 w-64 border-2 border-blue-300/70 rounded-2xl mx-10 flex flex-col">
            <div className='h-1/2 bg-blue-600 w-full'></div>
		</div>
	);
};

const CardSlider = () => {
	return (
		<ScrollCarousel
			autoplay
			autoplaySpeed={1}
			speed={1}
			onReady={() => console.log('I am ready')}
		>
			{Reviews.map((item) => (
				<Card review={item} />
			))}
		</ScrollCarousel>
	);
};

export default CardSlider;

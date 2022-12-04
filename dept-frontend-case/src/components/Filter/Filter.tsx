import React from 'react';

const Filter = () => {
	return (
		<div className='flex items-center justify-between p-8 lg:text-[26px] bg-[#121212] lg:bg-white'>
			<p className='text-[#A3A3A3]'>
				Show me{' '}
				<button className='lg:text-[#0E0E0E] text-white underline-offset-2 underline'>
					all work
				</button>
			</p>
			<p className='text-[#A3A3A3]'>
				In{' '}
				<button className='lg:text-[#0E0E0E] text-white underline-offset-2 underline'>
					all industries
				</button>
			</p>
		</div>
	);
};

export default Filter;

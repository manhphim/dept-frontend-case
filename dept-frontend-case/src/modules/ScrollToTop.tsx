import React from 'react';
import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
	const scrollToTop = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	return (
		<button
			type='button'
			onClick={scrollToTop}
			className='flex flex-col gap-4 text-lg items-center'
		>
			<svg
				width='13'
				height='24'
				viewBox='0 0 13 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.61676 0.197354C5.77839 -0.0612402 6.15306 -0.0667486 6.32222 0.186982L12.2446 9.07061C12.4307 9.34966 12.2306 9.72343 11.8953 9.72343H0.42057C0.0907663 9.72343 -0.110299 9.36065 0.0644969 9.08098L5.61676 0.197354Z'
					fill='white'
				/>
				<path
					d='M4.70176 5.52443C4.70176 5.29253 4.88975 5.10454 5.12166 5.10454H7.22115C7.45306 5.10454 7.64105 5.29253 7.64105 5.52443V23.5801C7.64105 23.812 7.45306 24 7.22115 24H5.12166C4.88975 24 4.70176 23.812 4.70176 23.5801V5.52443Z'
					fill='white'
				/>
			</svg>
			TOP
		</button>
	);
};

export default ScrollToTop;

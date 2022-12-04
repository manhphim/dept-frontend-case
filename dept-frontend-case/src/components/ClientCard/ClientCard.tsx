import React from 'react';

import { Link } from 'gatsby';

import * as styles from './ClientCard.module.scss';

const ClientCard = () => {
	return (
		<div className={`${styles.imageContainer}`}>
			<span className='font-light'>BOL.COM</span>
			<h2 className='text-[26px] lg:text-5xl'>
				A Summer island in the Netherlands
			</h2>
			<Link to='/' className='hidden lg:flex items-center'>
				<svg
					width='12'
					height='12'
					viewBox='0 0 12 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='mr-4'
				>
					<circle cx='6' cy='6' r='5.7' stroke='white' strokeWidth='0.6' />
					<circle
						cx='6'
						cy='6'
						r='1.7'
						fill='white'
						stroke='white'
						strokeWidth='0.6'
					/>
				</svg>
				Read more
			</Link>
		</div>
	);
};

export default ClientCard;

import React from 'react';
import * as styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div
			className={`${styles.heroContainer} flex flex-col gap-8 p-14 pb-[84px] items-start justify-end`}
		>
			<span className='font-light'>WORK</span>
			<h2 className='max-w-[579px] text-[34px] leading-9'>
				A selection of projects that pioneer tech and marketing to help brands
				stay ahead.
			</h2>
		</div>
	);
};

export default Hero;

import React from 'react';
import * as styles from './ClientList.module.scss';
import logo from './logos/image 51.png';

const ClientList = () => {
	const logos = [
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
		{
			logo: logo,
		},
	];
	return (
		<section className={`${styles.container}`}>
			<div>
				<h3 className='mb-8 text-[2.125rem]'>Clients</h3>
				<p className='text-[1.125rem]'>
					We value a great working relationship with our clients above all else.
					It’s why they often come to our parties. It’s also why we’re able to
					challenge and inspire them to reach for the stars.
				</p>
			</div>
			<ul className='grid grid-cols-2 lg:grid-cols-3 gap-x-[127px] lg:gap-x-[238px] gap-y-[83px] lg:px-[224px]'>
				{logos.map((logo, index) => (
					<li key={index}>
						<img src={logo.logo} alt='logo' className={styles.logo} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default ClientList;

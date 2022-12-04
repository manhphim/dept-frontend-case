import React from 'react';
import ClientCard from 'components/ClientCard/ClientCard';
import { Link } from 'gatsby';

const ClientNote = () => {
	return (
		<section className='flex flex-col lg:flex-row'>
			<div className='basis-2/3'>
				<ClientCard />
			</div>

			<div className='flex flex-col basis-1/3 justify-center gap-4 items-start bg-[#121212] px-8 py-6 lg:py-0'>
				<div className='flex flex-col gap-3 items-start'>
					<h3>MICROSOFT</h3>
					<p className='leading-5'>
						Tapping into Ireland’s unique gaming culture and bringing a fresh
						flavour to their Xbox social media channels
					</p>
					<Link to='/' className='flex items-center'>
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
				<span className='bg-[#ddd] h-[1px] w-full'></span>
				<div className='flex flex-col gap-3 items-start'>
					<h3>O’NEILL</h3>
					<p className='leading-5'>
						Integrating existing content into O’Neills’s new e-commerce platform
					</p>
					<Link to='/' className='flex items-center'>
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
				<span className='bg-[#ddd] h-[1px] w-full'></span>
				<div className='flex flex-col gap-3 items-start'>
					<h3>MICROSOFT</h3>
					<p className='leading-5'>
						Tapping into Ireland’s unique gaming culture and bringing a fresh
						flavour to their Xbox social media channels
					</p>
					<Link to='/' className='flex items-center'>
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
			</div>
		</section>
	);
};

export default ClientNote;

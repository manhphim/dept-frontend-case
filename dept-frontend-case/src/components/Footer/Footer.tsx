import React from 'react';
import logo from 'images/logos/logo_white.png';
import { Link } from 'gatsby';
import ScrollToTop from 'modules/ScrollToTop';

const Footer = () => {
	return (
		<footer className='bg-[#121212]'>
			<div className='px-12 py-16 flex flex-col gap-12'>
				<div className='flex justify-between'>
					<div className='flex gap-28'>
						<img src={logo} alt='logo' className='h-[25px] hidden lg:block ' />
						<ul className='flex flex-col lg:flex-row gap-4'>
							<li className='font-light'>WORK</li>
							<li className='font-light'>SERVICES</li>
							<li className='font-light'>STORIES</li>
							<li className='font-light'>ABOUT</li>
							<li className='font-light'>CAREERS</li>
							<li className='font-light'>CONTACT</li>
						</ul>
					</div>
					<ScrollToTop />
				</div>
				<span className='h-[1px] bg-[#3E3E3E]'></span>
				<div className='flex flex-col lg:flex-row justify-between gap-6'>
					<ul className='flex flex-col lg:flex-row items-start lg:gap-[2.25rem]'>
						<li className='text-[#808080]'>
							<Link to='/'>Chamber of Commerce: 63464101 </Link>
						</li>
						<li className='text-[#808080]'>
							<Link to='/'>VAT: NL 8552.47.502.B01</Link>
						</li>
						<li className='text-[#808080]'>
							<Link to='/'>Terms and conditions</Link>
						</li>
					</ul>
					<p className='text-[#808080]'>© 2022 Dept Agency</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

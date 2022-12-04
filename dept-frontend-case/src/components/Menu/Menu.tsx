import React from 'react';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import logo from 'images/logos/logo_white.png';
import { Link } from 'gatsby';

interface MenuProps {
	toggleMenuButton: () => void;
	isOpen: boolean;
}

const Menu = ({ toggleMenuButton, isOpen }: MenuProps) => {
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	return (
		<div className='w-screen h-screen fixed z-10 bg-[#121212] justify-center items-center'>
			<header className='py-[45px] px-4 lg:px-[55px]'>
				<div className='flex justify-between bg-[#121212] mb-[45px]'>
					<img src={logo} alt='logo' className='h-[15px] lg:h-[25px]' />
					<MenuButton toggleMenuButton={toggleMenuButton} isOpen={isOpen} />
				</div>
				<div
					className='text-[#FFFFFF80] hidden lg:block hover:cursor-pointer'
					onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
				>
					Landen
				</div>
				{isLanguageDropdownOpen && (
					<ul className='flex flex-col absolute bg-[#121212] mt-2 pr-2'>
						<li className='mb-[10px]'>NETHERLAND</li>
						<li className='mb-[10px]'>UNITED STATES</li>
						<li className='mb-[10px]'>IRELAND</li>
						<li className='mb-[10px]'>NETHERLAND</li>
						<li className='mb-[10px]'>UNITED STATES</li>
						<li className='mb-[10px]'>IRELAND</li>
					</ul>
				)}
				<nav>
					<ul className='flex flex-col text-end w-full text-[2.125rem] lg:text-6xl gap-4'>
						<li className='w-full'>
							<Link to='/'>
								HOME
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								WORK
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								CULTURE
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								SERVICES
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								PARTNERS
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								STORIES
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								CAREERS
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								EVENTS
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
						<li className='w-full'>
							<Link to='/'>
								CONTACT
								<div className='h-[1px] bg-[#A3A3A3] w-full mt-2'></div>
							</Link>
						</li>
					</ul>
				</nav>
			</header>{' '}
		</div>
	);
};

export default Menu;

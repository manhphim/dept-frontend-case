import React from 'react';
import logoWhite from 'images/logos/logo_white.png';
import logoBlack from 'images/logos/logo_black.png';
import { useState } from 'react';

import { Link } from 'gatsby';
import MenuButton from 'components/MenuButton/MenuButton';
import Menu from 'components/Menu/Menu';
import useWindowDimensions from 'hooks/useWindowDimensions';
import * as styles from './NavBar.module.scss';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { height, width } = useWindowDimensions();

	const toggleMenuButton = () => {
		setIsOpen(!isOpen);
	};

	const logo = width >= 1024 ? logoWhite : logoBlack;

	return (
		<>
			<header
				className={`bg-white lg:bg-[#121212] text flex py-[45px] px-4 lg:px-[55px] items-center justify-between ${
					isOpen ? `hidden` : ``
				}`}
			>
				<img src={logo} alt='logo' className='h-[15px] lg:h-[25px]' />
				<nav className='flex'>
					<ul className='hidden lg:flex mr-24'>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/'>WORK</Link>
						</li>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/about'>CULTURE</Link>
						</li>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/contact'>SERVICES</Link>
						</li>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/contact'>INSIGHTS</Link>
						</li>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/contact'>CAREERS</Link>
						</li>
						<li
							className={`mr-12 font-light ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
						>
							<Link to='/contact'>CONTACT</Link>
						</li>
					</ul>
					<MenuButton toggleMenuButton={toggleMenuButton} isOpen={isOpen} />
				</nav>
			</header>
			{isOpen && <Menu toggleMenuButton={toggleMenuButton} isOpen={isOpen} />}
		</>
	);
};

export default NavBar;

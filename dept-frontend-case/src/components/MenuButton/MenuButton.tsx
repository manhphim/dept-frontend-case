import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';

interface MenuButtonProps {
	toggleMenuButton: () => void;
	isOpen: boolean;
}

const MenuButton = ({ toggleMenuButton, isOpen }: MenuButtonProps) => {
	const { width, height } = useWindowDimensions();

	const button =
		width >= 1024 ? (
			<button className='text-center' onClick={toggleMenuButton}>
				<svg
					width='31'
					height='9'
					viewBox='0 0 31 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M8.31976 4.5C8.31976 6.70914 6.5289 8.5 4.31976 8.5C2.11062 8.5 0.319763 6.70914 0.319763 4.5C0.319763 2.29086 2.11062 0.5 4.31976 0.5C6.5289 0.5 8.31976 2.29086 8.31976 4.5Z'
						fill='white'
					/>
					<path
						d='M19.5198 4.5C19.5198 6.70914 17.7289 8.5 15.5198 8.5C13.3106 8.5 11.5198 6.70914 11.5198 4.5C11.5198 2.29086 13.3106 0.5 15.5198 0.5C17.7289 0.5 19.5198 2.29086 19.5198 4.5Z'
						fill='white'
					/>
					<path
						d='M30.7198 4.5C30.7198 6.70914 28.9289 8.5 26.7198 8.5C24.5106 8.5 22.7198 6.70914 22.7198 4.5C22.7198 2.29086 24.5106 0.5 26.7198 0.5C28.9289 0.5 30.7198 2.29086 30.7198 4.5Z'
						fill='white'
					/>
				</svg>
			</button>
		) : (
			<button className='text-center text-[#0E0E0E]' onClick={toggleMenuButton}>
				MENU
			</button>
		);
	return isOpen ? (
		<button className='text-center' onClick={toggleMenuButton}>
			<svg
				width='17'
				height='17'
				viewBox='0 0 17 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M2.37375e-05 15.2063L15.2064 0L16.7353 1.52895L1.52898 16.7353L2.37375e-05 15.2063Z'
					fill='white'
				/>
				<path
					d='M1.52895 3.43578e-05L16.7353 15.2064L15.2063 16.7353L0 1.52899L1.52895 3.43578e-05Z'
					fill='white'
				/>
			</svg>
		</button>
	) : (
		button
	);
};

export default MenuButton;

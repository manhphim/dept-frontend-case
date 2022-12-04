import React from 'react';
import * as styles from './Form.module.scss';

const Form = () => {
	return (
		<section className='flex flex-col lg:flex-row gap-16 py-[4.5rem] px-9 lg:px-12 items-start'>
			<h1 className='text-[2.75rem] text-[#121212] max-w-[305px]'>
				QUESTION? WE ARE HERE TO HELP!
			</h1>
			<div>
				<form className='text-[#121212] grid lg:grid-cols-2 gap-9 lg:gap-[40px]'>
					<div className='flex flex-col lg:col-span-1'>
						<label className='text-[#121212]' htmlFor='name'>
							NAME
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='border-b-[1px] w-full'
						/>
					</div>
					<div className='flex flex-col lg:col-span-1'>
						<label className='text-[#121212]' htmlFor='email'>
							EMAIL
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='border-b-[1px] w-full'
						/>
					</div>
					<div className='flex flex-col lg:col-span-1'>
						<label className='text-[#121212]' htmlFor='message'>
							MESSAGE
						</label>
						<textarea
							name='message'
							id='message'
							cols={40}
							rows={5}
							className='border-b-[1px] w-full'
						/>
					</div>
					<button
						type='submit'
						className='lg:col-span-2 w-full lg:w-[175px] py-4 rounded-[50px] border-[1px] border-[#121212] text-[1.125rem]'
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Form;

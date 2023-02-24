'use client';

import { sign } from 'crypto';
import { signIn } from 'next-auth/react';

const login = () => {
	return (
		<li className='list-none'>
			<button
				onClick={() => signIn()}
				className='text-sm  text-green-300 border-2 border-cyan-300 px-4 py-2'>
				Sign In
			</button>
		</li>
	);
};

export default login;

import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

import Login from './Login';

const Navbar = async () => {
	const session = await getServerSession(authOptions);
	console.log(session);

	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href='/'>
				<h1 className='font-bold text-lg text-gray-300'>Community Posts.</h1>
			</Link>

			<ul className='flex items-center gap-6'>
				{!session?.user && <Login />}
				{session?.user && <h1>{session.user.name}</h1>}
			</ul>
		</nav>
	);
};

export default Navbar;

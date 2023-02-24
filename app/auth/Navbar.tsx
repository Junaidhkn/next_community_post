import Link from 'next/link';
import Login from './login';

const Navbar = async () => {
	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href='/'>
				<h1 className='font-bold text-lg text-gray-300'>Community Posts.</h1>
			</Link>
			{
				<ul className='flex items-center gap-6'>
					<Login />
				</ul>
			}
		</nav>
	);
};

export default Navbar;

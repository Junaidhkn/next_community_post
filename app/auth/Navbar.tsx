import Link from 'next/link';

const Navbar = async () => {
	return (
		<nav>
			<Link href='/'>
				<h1>Community Posts</h1>
			</Link>
		</nav>
	);
};

export default Navbar;

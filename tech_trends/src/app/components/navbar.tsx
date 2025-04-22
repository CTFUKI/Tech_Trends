import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <Link href="/">Tech Trends</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline font-bold">Dashboard</Link>
          <Link href="/articles" className="hover:underline font-bold">Articles</Link>
          <Link href="/data" className="hover:underline font-bold">Data</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
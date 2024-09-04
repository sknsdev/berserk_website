import { pageList } from '@/models/navLinks';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="absolute z-10 p-8 w-full">
      <nav className="text-mainDark p-4 text-lg flex gap-4 justify-center">
        {pageList.map((link) => {
          return (
            <Link key={link.id} href={`${link.path}`} className="hover:font-bold duration-300 text-center">
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

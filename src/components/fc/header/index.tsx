import Link from 'next/link';
import { pageList } from '@/models/navLinks';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-[0_16px_40px_rgba(71,40,18,0.08)] backdrop-blur md:flex-col md:gap-3 md:rounded-[2rem]">
        <Link href="/" className="text-sm font-black uppercase tracking-[0.18em] text-mainDark">
          БЕРСЕРК Ассистент
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-[#5d534c]">
          {pageList.map(link => {
            const isExternal = link.path.startsWith('http');

            if (isExternal) {
              return (
                <a
                  key={link.id}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 transition duration-300 hover:bg-[#fff1e4] hover:text-[#b16332]"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.id}
                href={link.path}
                className="rounded-full px-4 py-2 transition duration-300 hover:bg-[#fff1e4] hover:text-[#b16332]"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

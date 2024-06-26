import HeroSection from '@/components/hero';
import phone from '/public/phone.png';
import Image from 'next/image';
const HomePage = () => {
  return (
    <>
      <main className="flex flex-col bg-dark justify-center items-center min-h-screen max-h-[100dvh] p-4">
        <HeroSection />
      </main>
      <Image src={phone} alt="phone" />
    </>
  );
};

export default HomePage;

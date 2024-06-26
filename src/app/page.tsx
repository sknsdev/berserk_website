import phone from '@/../public/hero/phone.png';
import { Marck_Script } from 'next/font/google';
import Image from 'next/image';
const mark = Marck_Script({ subsets: ['latin'], weight: '400' });
const HomePage = () => {
  return (
    <main>
      <section className="relative flex flex-col bg-dark justify-center items-center min-h-screen max-h-[100dvh] p-8">
        <div className="w-full h-[100dvh] flex flex-col items-center justify-center  bg-mainOrange ">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-dark text-[350px]">БЕРСЕРК</h1>
              <h2 className={`${mark.className} text-mainRose text-[200px] absolute bottom-[200px]`}>Ассистент</h2>
            </div>
            <p className="text-left max-w-[400px] text-sm text-white">Бесплатное мобильное приложение для ККИ “Берсерк” уже доступно в Google Store и Ru Store</p>
          </div>
        </div>
        <Image src={phone} alt="phone" placeholder="empty" priority className="absolute w-[600px] bottom-0" />
      </section>
    </main>
  );
};

export default HomePage;

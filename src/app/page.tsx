import phone from '@/../public/hero/phone.png';
import { Marck_Script } from 'next/font/google';
import Image from 'next/image';
const mark = Marck_Script({ subsets: ['latin'], weight: '400' });
const HomePage = () => {
  return (
    <main>
      <section className="relative flex flex-col bg-dark justify-center items-center min-h-screen max-h-[100dvh] p-8">
        <div className="w-full h-[100dvh] flex bg-mainOrange flex-col justify-center items-center">
          <h1 className="text-dark text-[350px]">БЕРСЕРК</h1>
          <h2 className={`${mark.className} text-mainRose text-[200px] absolute bottom-[250px]`}>Ассистент</h2>
          <p className="px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sunt dolor earum dolorum, doloremque quasi necessitatibus cupiditate veniam laboriosam ea accusamus a error perferendis
            laudantium consequuntur delectus amet incidunt molestias. Blanditiis debitis magnam adipisci animi velit sint architecto dolorem quas, nemo optio totam obcaecati? Laboriosam, cumque
            reprehenderit aliquam voluptatum obcaecati excepturi sit. Corrupti amet dolore eaque quos veniam fuga cupiditate!
          </p>
        </div>
        {/* <Image src={phone} alt="phone" placeholder="empty" priority className="absolute w-[600px] bottom-0" /> */}
      </section>
    </main>
  );
};

export default HomePage;

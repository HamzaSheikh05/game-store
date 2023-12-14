import { FiPlayCircle } from "react-icons/fi";
const Hero = () => {
  return (
    <section className="min-h-[812px] flex bg-video-img bg-cover bg-no-repeat box-border items-end pb-12 md:pb-36">
      <div className="flex flex-col justify-center items-start px-4 md:px-8 gap-4 md:gap-6 h-[252px] md:h-[352px]">
        <h2 className="text-white min-w-0 max-w-[640px] text-left font-Eremitage font-semibold text-2xl md:text-4xl leading-tight md:leading-[48px]">
          World’s first interactive battle metaverse powered by Web3
        </h2>
        <h6 className="text-white min-w-0 max-w-[640px] font-Oyko font-normal text-lg md:text-xl leading-6 md:leading-7 text-left">
          Embody your favourite crypto hero or a villain and fight it out for
          ultimate victory. Let the strongest win!
        </h6>

        <div className="flex flex-col md:flex-row gap-3 items-start w-full md:w-[385px] h-[80px] md:h-16 mb-12">
          <button className="inline-flex min-w-[188px] md:min-w-0 justify-center items-center py-4 md:py-4 px-7 md:px-7 w-full md:w-[188px] h-[60px] md:h-[60px] rounded-[32px] bg-[#000500] border-2 border-solid border-[#AEFF00] shadow-sm shadow-[#1018280D] text-[#AEFF00] gap-3 font-Oyko">
            <FiPlayCircle />
            VIEW DEMO
          </button>
          <button className="inline-flex min-w-[188px] md:min-w-0 justify-center items-center py-7 md:py-4 px-4 md:px-7 gap-3 w-full md:w-[188px] h-[60px] md:h-[60px] bg-[#AEFF00] font-normal font-Oyko text-lg md:text-xl text-black rounded-[32px] shadow-sm shadow-[#101828]">
            JOIN THE FIGHT
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

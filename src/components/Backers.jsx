import DaoLogo from "../assets/DaoLogo.png";
import DogeChain from "../assets/Dogechain.png";
import GameFi from "../assets/Gamefi.png";
import LDA from "../assets/LDA.png";

const Backers = () => {
  return (
    <section className="flex justify-center items-center py-12 min-h-[216px] bg-navigation">
      <div className="flex flex-col py-2 px-8 gap-8 min-h-[120px]">
        <h4 className="font-Oyko font-normal text-2xl text-[#EAECF0] text-center">
          Cyber Arena is powered by Imperium Games and supported by:
        </h4>

        <div className="flex flex-row flex-wrap justify-center items-center gap-10">
          <img src={DaoLogo} alt="DAO" className="w-[254px] h-14" />
          <img src={DogeChain} alt="DogeChain" className="W-[254px] h-14" />
          <img src={GameFi} alt="GameFi" className="w-[254px] h-14" />
          <img src={LDA} alt="LDA" className="w-[254px] h-14" />
        </div>
      </div>
    </section>
  );
};
export default Backers;

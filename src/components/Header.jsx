import Logo from "../assets/Logo.png";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="flex-row pb-2 md:flex flex-wrap flex justify-center items-center min-h-[80px] bg-navigation text-white font-Eremitage text-[16px] leading-6 font-bold gap-4 border-b-[1px] border-solid border-[#f2f4f7]">
      <img src={Logo} alt="logo svg" className="h-8 w-[185px]" />

      <h2 className="text-[#aeff00]">Home</h2>
      <h2>Manifesto</h2>
      <h2>$CAT token</h2>
      <h2>About</h2>
      <h2>Whitepaper</h2>
      <h2>Staking</h2>

      <button className="text-[#e7ffb3] border-[#e7ffb3] border-[1px] rounded-xl text-[10px] p-1">
        Coming Soon
      </button>

      <div className="flex gap-3 lg:ml-10 xl:ml-20">
        <BsTwitter className="text-white h-5 w-6" />
        <RiDiscordFill className="text-white h-5 w-6" />
        <BsTelegram className="text-white h-5 w-6" />
      </div>
    </nav>
  );
};
export default Header;

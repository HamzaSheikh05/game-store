import League from "../assets/LeagueMode.png";
import Tournament from "../assets/Tournament.png";

const Game = () => {
  return (
    <section className="bg-cover-img bg-cover flex flex-col justify-center">
      {/** Cyber Arena Container 1 */}
      <div className="flex flex-col self-center md:self-end lg:self-end items-center justify-center py-8 px-4 md:px-8 lg:max-w-[60%] ">
        <h1 className="font-Eremitage font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
          Cyber Arena Game modes
        </h1>
        <h4 className="font-Oyko font-normal text-lg self-start text-left md:text-xl lg:text-2xl text-[#EAECF0] lg:max-w-xl">
          In the year 2154, a dystopian crypto-powered technology is in full
          force. The human species is locked in a ruthless class system.
        </h4>
      </div>

      {/** Cyber Arena Container 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-8 px-4 md:px-8">
        <img
          src={League}
          alt="LeagueMode"
          className="w-full md:w-2/5 xl:w-1/2 mb-4 md:mb-0"
        />
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-3/5 xl:w-1/2">
          {/* Story mode */}
          <div className="border-l-4 border-solid border-[#AEFF00] p-4 md:p-6 mb-6 md:mb-0">
            <h3 className="text-white font-Eremitage font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
              Story mode
            </h3>
            <p className="text-[#EAECF0] font-Oyko font-normal text-base md:text-lg lg:text-xl leading-6">
              Each character has a unique story, play-through experience, and
              gaming life path. Upgrade characters and assist them in realizing
              their personal vendettas or liberation goals.
            </p>
          </div>

          {/* League mode */}
          <div className="border-l-4 border-solid border-[#F2F4F7] p-4 md:p-6">
            <h3 className="text-white font-Eremitage font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
              League mode
            </h3>
            <p className="text-[#EAECF0] font-Oyko font-normal text-base md:text-lg lg:text-xl leading-6">
              Progress through the league divisions, climb up the ranking
              system, claim exclusive NFTs, tokens, and receive trial rewards at
              the end of each season.
            </p>
          </div>
        </div>
      </div>

      {/** Cyber Arena Container 3 */}
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-8">
        <h2 className="font-Eremitage font-semibold text-4xl md:text-5xl lg:text-6xl self-start text-white mb-4 md:mb-6">
          Cyber Arena Game modes
        </h2>
        <p className="font-Oyko font-normal text-[#EAECF0] self-start text-left text-lg md:text-xl lg:text-2xl max-w-md lg:max-w-xl">
          The Roman Colosseum in Cyber-Punk style, with thousands fighting to
          death against the cybernetically enhanced people.
        </p>
      </div>

      {/** Cyber Arena Container 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-8 px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-3/5 xl:w-1/2">
          {/* Tournament mode */}
          <div className="border-l-4 border-solid border-[#AEFF00] p-4 md:p-6 mb-6 md:mb-0">
            <h3 className="font-Eremitage font-semibold text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-4">
              Tournament mode
            </h3>
            <p className="font-Oyko text-left text-[#EAECF0] font-normal text-base md:text-lg lg:text-xl leading-6">
              Use a tournament ticket and pick various tournament difficulties
              and sizes with up to 128 players. Pick the one that suits you and
              start earning rewards!
            </p>
          </div>

          {/* Versus mode */}
          <div className="border-l-4 border-solid border-[#F2F4F7] p-4 md:p-6">
            <h3 className="font-Eremitage font-semibold text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-4">
              Versus mode
            </h3>
            <p className="font-Oyko text-[#EAECF0] text-left font-normal text-base md:text-lg lg:text-xl leading-6">
              Create your own fight proposal where you set the rules or accept
              another fighter’s proposal and start duking it out for $CAT
              tokens... Winner takes it all!
            </p>
          </div>
        </div>
        <img
          src={Tournament}
          alt="Tournament Dp"
          className="w-full md:w-2/5 xl:w-1/2"
        />
      </div>
    </section>
  );
};
export default Game;

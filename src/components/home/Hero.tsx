import JoinUs from "../JoinUs"
import { Button } from "../core/Button"
import AnimatedBanner from "./AnimatedBanner"

const Hero = () => {
  return (
    <div className="full-height flex-col flex md:overflow-auto overflow-hidden">
      <AnimatedBanner />
      <div className="flex flex-col md:flex-row md:gap-x-11 md:justify-start w-full container mx-auto flex-grow">
        <div className="relative w-full md:w-auto md:flex-grow md:h-full background-border mb-6 md:mb-0 h-[504px]">
          <div className="absolute md:left-5 left-3 md:top-5 top-3 text-left text-white">
            <p className="md:text-lg text-base font-normal">Welcome to T-DEX</p>
            <h1 className="2xl:text-[64px] text-[32px] lg:text-[40px] lg:leading-[35px] font-bold 2xl:leading-[52px] leading-[32px] md:mt-0 mt-3 md:mb-8 mb-4">
              Where Gamified Trading <br className="md:block hidden" />
              Meets Decentralized <br className="md:block hidden" />
              Finance
            </h1>
            <Button className="!bg-[#54BBF4] text-white" rounded>
              Join Us
            </Button>
          </div>

          <img
            className="absolute md:right-0 bottom-0 md:z-10 -z-10 md:h-[110%] h-[72%] left-[148px] md:left-[unset]"
            src="/Dino5.png"
            alt="Dinosaur Illustration"
          />
        </div>
        <div className="w-full md:w-[283px] flex flex-col md:gap-0 gap-6 md:justify-between md:h-full mb-[36px] md:mb-0">
          <div className="flex justify-end">
            <p className="text-xs md:text-base text-white max-w-[270px] md:max-w-full font-light">
              At T-dex, we are redefining the decentralized trading experience
              by blending gamified elements with automated trading solutions,
              education, and a vibrant community on Telegram...
            </p>
          </div>
          <JoinUs />
        </div>
      </div>
    </div>
  )
}

export default Hero

import { Link, NavLink } from "react-router-dom"
import { Button } from "./core/Button"
import { useEffect, useState } from "react"
const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-[#54BBF4] font-bold" : "text-white font-normal"

  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 40)
      )
    }
  }, [])

  return (
    <div className={`container mx-auto sm:px-0 sticky top-0 z-20`}>
      <header
        className={`flex justify-between items-center py-2 sm:py-5 bg-[#0D0D0D/20] ${small
          ? "backdrop-blur-xl transition-all duration-1000 ease-out"
          : ""
          }`}
      >
        <svg  width="200%" height="200%" className="md:hidden block w-full left-0 bottom-[-60px] h-auto absolute" viewBox="0 0 290 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
              <feFlood flood-color="#54BBF4" result="color" />
              <feComposite in="color" in2="blur1" operator="in" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path id="linePath1" d="M 0 0 L 20 24 H 268 L 294 43" stroke="#4A4B54"/>

          <path
            id="photon"
            d="M 3 0 L 12 -1 C 14 -1 17 -2 19 -2 C 24 -2 25 2 19 2 L 12 1"
            fill="#54BBF4"
            filter="url(#glowFilter)"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin="0s; 2s"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 1 1; 0 0 0.58 1">
              <mpath xlinkHref="#linePath1" />
            </animateMotion>
          </path>
        </svg>


        <svg className="absolute md:block hidden -bottom-3 header-svg-animate h-auto" viewBox="0 0 1570 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
              <feFlood flood-color="#54BBF4" result="color" />
              <feComposite in="color" in2="blur1" operator="in" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path id="linePath2" d="M1 0.5L21 20.5H1549L1569 40.5" stroke="#4A4B54" />

          <path
            id="photon"
            d="M0 0 15-4C13.3333-4 16.6667-4 20-4 24-2 24 2 20 4L15 4"
            fill="#54BBF4"
            filter="url(#glowFilter)"
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin="0s; 2s"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 1 1; 0 0 0.58 1">
              <mpath xlinkHref="#linePath2" />
            </animateMotion>
          </path>
        </svg>






        <Link to="/" className="md:w-[220px]">
          <img src="/Logo.svg" alt="T_DEX" className="w-auto h-4" />
        </Link>
        <nav className="md:block hidden">
          <ul className="flex gap-10 text-white">
            <NavLink className={linkClass} to="/Tokenomics">
              <li className="hover:text-[#54BBF4]">Tokenomics</li>
            </NavLink>
            <NavLink className={linkClass} to="AboutUs">
              <li className="hover:text-[#54BBF4]">About us</li>
            </NavLink>
            <NavLink className={linkClass} to="Airdrop">
              <li className="hover:text-[#54BBF4]">Airdrop</li>
            </NavLink>
            <NavLink className={linkClass} to="TradeBot">
              <li className="hover:text-[#54BBF4]">TradeBot</li>
            </NavLink>
          </ul>
        </nav>
        <Button className="md:block hidden" rounded>
          Connect Wallet
        </Button>
        <Button className="bg-transparent md:hidden block !p-0">
          <img width={24} height={24} src="/Menu.svg" alt="Menu" />
        </Button>
      </header>
    </div >
  )
}

export default Header

import { Link, NavLink } from "react-router-dom";
import { Button } from "./core/Button";
import { useEffect, useState } from "react";
const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-[#54BBF4] font-bold" : "text-white font-normal";

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 40)
      );
    }
  }, []);

  return (
    <div className={`container mx-auto sm:px-0 sticky top-0 z-20`}>
      <header
        className={`flex justify-between items-center py-2 sm:py-5 curve-bottom bg-[#0D0D0D/20] ${
          small
            ? "backdrop-blur-xl transition-all duration-1000 ease-out"
            : ""
        }`}
      >
        <Link to="/">
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
    </div>
  );
};

export default Header;

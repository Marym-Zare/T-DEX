import { NavLink } from "react-router-dom";
import { Button } from "./core/Button";
const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-[#54BBF4] font-bold" : "text-white font-normal";

  return (
    <div className="container mx-auto sm:px-0">
      <header className="flex justify-between items-center py-2 sm:py-5 curve-bottom">
        <img src="/Logo.svg" alt="T_DEX" className="w-auto h-4" />
        <nav className="md:block hidden">
          <ul className="flex gap-10 text-white">
            <NavLink className={linkClass} to="/Tokenomics">
              <li>Tokenomics</li>
            </NavLink>
            <NavLink className={linkClass} to="AboutUs">
              <li>About us</li>
            </NavLink>
            <NavLink className={linkClass} to="Airdrop">
              <li>Airdrop</li>
            </NavLink>
            <NavLink className={linkClass} to="TradeBot">
              <li>TradeBot</li>
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

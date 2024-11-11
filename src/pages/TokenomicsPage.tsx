import JoinUs from "../components/JoinUs";
import DistributionItem from "../components/Tokenomics/DistributionItem";

const TokenomicsPage = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-start w-full mt-20 mb-[120px]">
        <div className="w-[45%]">
          <p className="text-xl font-normal text-white mb-2">
            Turning Donations Into Profit
          </p>
          <h2 className="text-4xl font-bold text-[#54BBF4]">
            Stake Your LP Tokens and Get T-DEX Points to be Unique Airdrop
            Eligible
          </h2>
        </div>
        <div className="w-[50%]">
          <div className="flex items-center gap-x-3">
            <p className="text-xl font-bold text-white">T-DEX Token CA: </p>
            <p className="text-xl font-normal text-[#C0C0C0]">
              0x2C4aE47A033A7c65149786439148950621Cd861
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-5 mt-4">
            <div className="curve-bottom-2 mr-7 pb-5">
              <p className="text-white text-xl font-bold">LP Token Balance</p>
              <span className="text-[#C0C0C0] text-xl font-normal">
                Connect Wallet To See
              </span>
            </div>
            <div className="curve-bottom-2 mr-7 pb-5">
              <p className="text-white text-xl font-bold">
                T-DEX Points Balance
              </p>
              <span className="text-[#C0C0C0] text-xl font-normal">
                Connect Wallet To See
              </span>
            </div>
            <div className="curve-bottom-2 mr-7 pb-5">
              <p className="text-white text-xl font-bold">Staked Amount</p>
              <span className="text-[#C0C0C0] text-xl font-normal">
                Connect Wallet To See
              </span>
            </div>
            <div className="curve-bottom-2 mr-7 pb-5">
              <p className="text-white text-xl font-bold">Current Points</p>
              <span className="text-[#C0C0C0] text-xl font-normal">
                Connect Wallet To See
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-[120px]">
        <div className="w-[80%]">
          <img src="/TimeLine.png" alt="Time Line" />
        </div>
      </div>
      <div className="pt-16 pl-11 pr-5 bg-[#121212] rounded-xl flex justify-between items-start w-full pb-24">
        <div className="w-[40%]">
          <img src="/PieChart2.png" alt="Pie Chart" />
        </div>
        <div className="w-[60%]">
          <div className="mb-20 text-left">
            <h1 className="text-[#54BBF4] text-[64px] font-bold leading-[65px] mb-6">
              Empowering a Sustainable Ecosystem
            </h1>
            <p className="text-white text-xl font-light">
              At T-dex, our tokenomics are meticulously prepared to ensure
              growth, and sustainability, and to reward our vibrant community.
              By strategically distributing TDEX tokens across various
              allocations, we maintain a balanced approach to development,
              incentivization, and liquidity management. Discover how our
              tokenomics framework fortifies the T-dex ecosystem
            </p>
          </div>
          <div>
            <h2 className="text-white text-4xl font-bold mb-[52px]">
              Token Distribution Breakdown
            </h2>
            <ul>
              <li>
                <DistributionItem
                  title="15% - First Airdrop (Rewarding Early Adopters)"
                  purpose="Grant early supporters exclusive access to the T-dex journey."
                  impact="Strengthens our community from the outset, nurturing loyalty and
                  engagement"
                />
              </li>
              <li>
                <DistributionItem
                  title="20% - Second Airdrop (Expanding Our Community)"
                  purpose="Continue to grow our user base with another round of token distribution."
                  impact="Attracts more traders, gamers, and enthusiasts, enhancing network effects."
                />
              </li>
              <li>
                <DistributionItem
                  title="10% - Team Allocation (Fueling Innovation and Stability)"
                  purpose="Support our dedicated team in developing, maintaining, and expanding the T-dex platform."
                  impact="Ensures ongoing innovation, platform stability, and sustained growth."
                />
              </li>
              <li>
                <DistributionItem
                  title="30% - Liquidity Pool (Ensuring Robust Trading)"
                  purpose="Establish a substantial liquidity pool for the T-dex ecosystem."
                  impact="Facilitates smoother trades, reduces slippage, and creates a resilient trading environment for our users."
                />
              </li>
              <li>
                <DistributionItem
                  title="25% - Ecosystem Development (Driving Future Growth)"
                  purpose="Invest in future developments, integrations, partnerships, and growth incentives."
                  impact="Sustains and expands the T-dex ecosystem, fostering long-term success and community rewards."
                />
              </li>
            </ul>
          </div>
          <JoinUs joinUsClassName="my-24" />
        </div>
      </div>
    </section>
  );
};

export default TokenomicsPage;

const JoinUs = ({ joinUsClassName }: { joinUsClassName?: string }) => {
  return (
    <div className={joinUsClassName || ""}>
      <p className="text-white text-base font-normal mb-3 pl-[5px]">
        Join Our Community
      </p>
      <div className="w-[283px] h-[63px] join-us-background-border flex justify-center items-center gap-x-8">
        <a href="https://x.com/TdexTradeBot" target="_blank">
          <img width={24} height={24} src="/X.svg" alt="X" />
        </a>
        <a href="https://t.me/Tdex_mvp_bot/Tdex_mvp_bot" target="_blank">
          <img width={24} height={24} src="/Telegrram.svg" alt="Telegrram" />
        </a>
        <a
          href="https://youtube.com/@tdexgroup?si=-15ax25v_Nauiglh"
          target="_blank"
        >
          <img width={24} height={24} src="/Youtube.svg" alt="Youtube" />
        </a>
        <a href="https://warpcast.com/web3abracadabra" target="_blank">
          <img width={24} height={24} src="/Farcaster.svg" alt="Farcaster" />
        </a>
      </div>
    </div>
  );
};

export default JoinUs;

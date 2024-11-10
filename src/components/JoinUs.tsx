const JoinUs = ({ joinUsClassName }: { joinUsClassName?: string }) => {
  return (
    <div className={joinUsClassName || ""}>
      <p className="text-white text-base font-normal mb-3 pl-[5px]">
        Join Our Community
      </p>
      <div className="relative w-[283px] h-[63px] flex justify-center items-center gap-x-8">
        <img
          className="absolute h-full w-full object-contain"
          src="/JoinUsBorder.svg"
          alt="Join Us Border"
        />
        <img width={24} height={24} src="/X.svg" alt="X" />
        <img width={24} height={24} src="/Telegrram.svg" alt="Telegrram" />
        <img width={24} height={24} src="/Youtube.svg" alt="Youtube" />
        <img width={24} height={24} src="/Farcaster.svg" alt="Farcaster" />
      </div>
    </div>
  );
};

export default JoinUs;

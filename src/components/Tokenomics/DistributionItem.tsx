const DistributionItem = ({
  title,
  purpose,
  impact,
}: {
  title: string;
  purpose: string;
  impact: string;
}) => {
  return (
    <div className="pb-9 curve-bottom-2">
      <p className="text-white text-xl font-bold mb-6">
        {title}
      </p>
      <div className="flex flex-col gap-y-1 mb-3">
        <span className="text-[#54BBF4] text-xl font-normal">Purpose</span>
        <p className="text-white text-xl font-normal">
          {purpose}
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-[#54BBF4] text-xl font-normal">Impact</span>
        <p className="text-white text-xl font-normal">
          {impact}
        </p>
      </div>
    </div>
  );
};

export default DistributionItem;

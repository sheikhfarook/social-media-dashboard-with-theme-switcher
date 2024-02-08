import { overView } from "./data/overview";

const TodaysView = () => {
  return (
    <div className="mt-14 ">
      <div className="text-[#FFF] text-[24px] font-[700] leading-[29.05px]">
        Overview - Today
      </div>
      <div className="grid grid-cols-4 mt-10 gap-5  w-[1110px]">
        {overView?.map((views) => (
          <div
            key={views?.id}
            className=" w-[255px] h-[125px] text-[#FFF] bg-[#252b42] space-y-7 p-6 rounded-[5px] 
            cursor-pointer hover:opacity-85 ">
            <div className="flex gap-5 justify-between ">
              <div className="text-[14px] text-[#8c98c6] font-[700] leading-[16.94px]">
                {views?.text}
              </div>
              <img src={views?.icon1} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="text-[#FFF] text-[32px] leading-[38.73px] font-[700]">
                {views?.rank}
              </div>
              <div className="flex gap-1">
                <img src={views?.icon2} alt="" />
                <div
                  className={`text-[#1eb589] font-[700] text-[12px]
                 leading-[14.52px] my-auto ${
                   views.colors === "redcolor" ? "text-[#dc414c]" : 0
                 }`}>
                  {views?.percentage}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysView;

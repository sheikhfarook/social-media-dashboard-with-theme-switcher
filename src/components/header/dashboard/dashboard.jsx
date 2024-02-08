import { dashboardData } from "../../data/data";

const DashBoardComponent = () => {
  return (
    <div className="flex gap-10 mt-10 h-[216px] max-sm:flex-col  max-sm:mt-10">
      {dashboardData?.map((info) => (
        <div
          key={info?.id}
          className={`border-t-[4px] text-center w-[255px] h-[216px] 
          rounded-[5px] bg-[#252b42] space-y-5 p-8 cursor-pointer hover:opacity-85
          max-sm:w-[326px] ${
            info.name === "facebook"
              ? "border-t-[#178FF5] "
              : info.name === "twitter"
              ? "border-t-[#1DA1F2] "
              : info.name === "instagram"
              ? "border-t-[#ee877e]"
              : info.name === "youtube"
              ? "border-t-[#C4032B] "
              : 0
          }`}>
          <div className="flex justify-center gap-2 items-center ">
            <img className="" src={info?.profile} alt="" />
            <div className="text-[12px] font-[700] leading-[14.52px] text-[#8c98c6]">
              {info?.Username}
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="text-[#FFF] text-[56px] font-[700] 
            leading-[48px]  tracking-[-2px]">
              {info?.number}
            </div>
            <div
              className="text-[#8c98c6] text-[12px] font-[400] 
               leading-[14.52px] tracking-[5px] ">
              {info?.popular}
            </div>
          </div>
          <div className="flex justify-center">
            <img src={info?.profile2} alt="" />
            <div
              className="text-[#1eb589] font-[700] text-[12px]
            leading-[14.52px]">
              {info?.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardComponent;

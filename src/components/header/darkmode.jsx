const DarkMode = () => {
  return (
    <div
      className="flex justify-between text-[#FFF] max-sm:flex-col max-sm:space-y-4
     max-sm:w-[326px] max-sm:m-auto">
      <div className="leading-">
        <div className="text-[2rem] text-[#FFF] font-[700] max-sm:text-[24px]">
          Social Media Dashboard
        </div>
        <div
          className="text-[1rem] text-[#8c98c6] font-[700] leading-[16.94px] 
        max-sm:text-[14px] ">
          Total Followers:23,004
        </div>
      </div>
      <div className=" opacity-35">
        <hr />
      </div>
      <div className="flex my-auto">
        <div className="text-[14px] font-[700] text-[#8c98c6]">Dark Mode</div>
        <div></div>
      </div>
    </div>
  );
};

export default DarkMode;

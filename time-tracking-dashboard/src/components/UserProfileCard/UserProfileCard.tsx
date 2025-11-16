function UserProfileCard() {
  return (
    <>
      <div className="sm:w-[327px] sm:h-[203px] sm:flex-col lg:flex-row lg:w-auto lg:h-[244px] xl:w-[255px] xl:h-[518px] flex xl:flex-col bg-[#1C204B] rounded-[15px]">
          <div className="sm:h-[133px] sm:items-center xl:items-start lg:pt-0 lg:w-[50%] lg:h-[244px] xl:w-full xl:h-[354px] flex xl:flex-col sm:gap-[20px] lg:gap-[43px] rounded-[15px] bg-[#5747EA] xl:pt-[37px] pl-[32px] ">
            <img
              src="/user-profile-black-man-smiling.svg"
              alt="User profile"
              className="rounded-full w-[78px] h-[78px] object-center"
            />
            <div className="flex flex-col gap-[3px]">
              <div className="text-[15px] text-[#BBC0FF] leading-none">
                Report for
              </div>
              <div className="sm:text-[24px] lg:text-[40px]/[41px] text-[#FFFFFF] lg:w-[138px] lg:font-light">
                Jeremy Robson
              </div>
            </div>
          </div>

          <div className="flex sm:justify-around sm:pt-[24px] lg:items-start sm:pl-0 lg:flex-col xl:gap-[15px] text-[#7078C9] lg:pl-[32px] lg:pt-[26px] text-[18px]">
            <div className="cursor-pointer hover:text-white transition-colors duration-300">Daily</div>
            <div className="text-[#FFFFFF] cursor-pointer hover:text-white transition-colors duration-300">Weekly</div>
            <div className="cursor-pointer hover:text-white transition-colors duration-300">Monthly</div>
          </div>
      </div>
    </>
  );
}

export default UserProfileCard;

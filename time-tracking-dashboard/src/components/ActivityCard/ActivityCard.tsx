import { useState, useEffect } from 'react';

interface ActivityCardProps {
  background: string;
  title: string;
  time: string;
  lastWeek: string;
}

const LG_BREAKPOINT = 1024; 

function ActivityCard({
  background,
  title,
  time,
  lastWeek,
}: ActivityCardProps) {
  const [imageUrl, setImageUrl] = useState(background);

  const getLgUrl = (url: string) => {
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex === -1) return url;

    return url.slice(0, lastDotIndex) + '-lg' + url.slice(lastDotIndex);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);

    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setImageUrl(getLgUrl(background));
      } else {
        setImageUrl(background);
      }
    };

    handleScreenChange(mediaQuery); 
    mediaQuery.addListener(handleScreenChange);

    return () => mediaQuery.removeListener(handleScreenChange);
  }, [background]);

  return (
    <>
      <div className="flex flex-col w-[327px] h-[160px] lg:w-[255px] lg:h-[244px] z-0 relative rounded-[15px]">
        <img
          className="sm:w-[100%] object-contain lg:w-[255px] h-[160px] absolute top-0 z-1"
          src={imageUrl}
          alt={`Icon for ${title}`}
        />
        
        <div className="flex gap-[3px] cursor-pointer group absolute sm:top-[75px] lg:top-[82px] sm:right-[24px] lg:right-[30px] z-3">
          <div className="rounded-full w-[5px] h-[5px] bg-[#BBC0FF] group-hover:bg-[#FFFFFF] transition-colors duration-300"></div>
          <div className="rounded-full w-[5px] h-[5px] bg-[#BBC0FF] group-hover:bg-[#FFFFFF] transition-colors duration-300"></div>
          <div className="rounded-full w-[5px] h-[5px] bg-[#BBC0FF] group-hover:bg-[#FFFFFF] transition-colors duration-300"></div>
        </div>

        <div className="flex flex-col sm:gap-[6px] lg:gap-[24px] w-full sm:h-[122px] lg:h-[199px] bg-[#1C204B] absolute bottom-0 z-2 rounded-[15px] cursor-pointer hover:bg-[#33397A] pt-[29px] sm:px-[24px] lg:px-[30px] text-[#FFFFFF] transition-colors duration-300">
            <div className="flex justify-between items-center text-[18px]/[18px]">
                <div>{title}</div>
            </div>

            <div className="flex sm:flex-row sm:justify-between sm:items-center lg:items-start lg:flex-col gap-[8px]">
                <div className="sm:text-[32px] lg:text-[56px]/[56px] font-light">
                    {time}hrs
                </div>
                <div className="text-[15px] text-[#BBC0FF]">
                    Last Week - {lastWeek}hrs
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ActivityCard;
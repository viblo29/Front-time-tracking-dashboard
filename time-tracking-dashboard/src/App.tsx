import ActivityCard from "./components/ActivityCard/ActivityCard"
import UserProfileCard from "./components/UserProfileCard/UserProfileCard"
function App() {
  return (
    <>
      <div className='flex flex-col px-[24px] py-[81px] justify-center items-center w-screen lg:h-screen bg-[#0e1323]'>
        <div className="flex flex-col gap-[24px] xl:flex-row xl:gap-[30px]">
          <UserProfileCard />
          <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col items-center gap-[24px] lg:gap-[30px] lg:flex-row">
                <ActivityCard background="../public/bg-briefcase.svg" title="Work" time="32" lastWeek="36"/>
                <ActivityCard background="../public/bg-play.svg" title="Play" time="10" lastWeek="8"/>
                <ActivityCard background="../public/bg-study.svg" title="Study" time="4" lastWeek="7"/>
              </div>
            <div className="flex flex-col items-center gap-[24px] lg:gap-[30px] lg:flex-row">
              <ActivityCard background="../public/bg-exercise.svg" title="Exercise" time="4" lastWeek="5"/>
              <ActivityCard background="../public/bg-social.svg" title="Social" time="5" lastWeek="10"/>
              <ActivityCard background="../public/bg-selfcare.svg" title="Self Care" time="2" lastWeek="2"/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

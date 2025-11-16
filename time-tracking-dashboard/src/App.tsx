import ActivityCard from "./components/ActivityCard/ActivityCard";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import bgBriefcase from "./assets/bg-briefcase.svg";
import bgBriefcaseLg from "./assets/bg-briefcase-lg.svg";
import bgPlay from "./assets/bg-play.svg";
import bgPlayLg from "./assets/bg-play-lg.svg";
import bgStudy from "./assets/bg-study.svg";
import bgStudyLg from "./assets/bg-study-lg.svg";
import bgExercise from "./assets/bg-exercise.svg";
import bgExerciseLg from "./assets/bg-exercise-lg.svg";
import bgSocial from "./assets/bg-social.svg";
import bgSocialLg from "./assets/bg-social-lg.svg";
import bgSelfCare from "./assets/bg-selfcare.svg";
import bgSelfCareLg from "./assets/bg-selfcare-lg.svg";

function App() {
  return (
    <>
      <div className="flex flex-col px-[24px] py-[81px] justify-center items-center w-screen lg:h-screen bg-[#0e1323]">
        <div className="flex flex-col gap-[24px] xl:flex-row xl:gap-[30px]">
          <UserProfileCard />
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col items-center gap-[24px] lg:gap-[30px] lg:flex-row">
              <ActivityCard
                background={bgBriefcase}
                backgroundLg={bgBriefcaseLg}
                title="Work"
                time="32"
                lastWeek="36"
              />
              <ActivityCard
                background={bgPlay}
                backgroundLg={bgPlayLg}
                title="Play"
                time="10"
                lastWeek="8"
              />
              <ActivityCard
                background={bgStudy}
                backgroundLg={bgStudyLg}
                title="Study"
                time="4"
                lastWeek="7"
              />
            </div>
            <div className="flex flex-col items-center gap-[24px] lg:gap-[30px] lg:flex-row">
              <ActivityCard
                background={bgExercise}
                backgroundLg={bgExerciseLg}
                title="Exercise"
                time="4"
                lastWeek="5"
              />
              <ActivityCard
                background={bgSocial}
                backgroundLg={bgSocialLg}
                title="Social"
                time="5"
                lastWeek="10"
              />
              <ActivityCard
                background={bgSelfCare}
                backgroundLg={bgSelfCareLg}
                title="Self Care"
                time="2"
                lastWeek="2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

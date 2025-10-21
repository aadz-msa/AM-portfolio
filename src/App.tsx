import './framer/styles.css'

import SmallCardFramerComponent from './framer/small-card'
import ShimmerFramerComponent from './framer/shimmer'
import HeadingBadgeFramerComponent from './framer/heading-badge'
import ProcessCardFramerComponent from './framer/process-card'
import BenefitCardFramerComponent from './framer/benefit-card'
import ServiceCardFramerComponent from './framer/service-card'
import MainButtonFramerComponent from './framer/main-button'
import CommentFramerComponent from './framer/comment'
import CallButtonFramerComponent from './framer/call-button'
import CursorGraphicFramerComponent from './framer/cursor-graphic'
import ProjectCardFramerComponent from './framer/project-card'
import TagRedirectorFramerComponent from './framer/tag-redirector'
import AvailabilityFramerComponent from './framer/availability'
import SocialMediaFramerComponent from './framer/elements/social-media'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(0,_0,_0)]'>
      <SmallCardFramerComponent.Responsive
        D9G1UslsE={"Character Design"}
      />
      <ShimmerFramerComponent.Responsive/>
      <HeadingBadgeFramerComponent.Responsive
        YZumv1zMk={"Game Developer & Designer"}
      />
      <ProcessCardFramerComponent.Responsive
        cMLEvam8D={"Programming"}
        fEimbXPQf={"Set 1"}
        lq6j9JCSp={"Proficient in Python, C++, C, C# and Java for implementing logic, algorithms, and efficient solutions across projects."}
        xYKAp_GUD={" 1"}
      />
      <BenefitCardFramerComponent.Responsive
        HKg707RIG={"Prototypes"}
        kLCshh1kV={" Developed and showcased multiple small-scale game prototypes including games and websites"}
        lqrlZlvt0={"Podcasts"}
        qNAzsox6U={"Delivered a technical podcast reflecting on creative learning and development experiences."}
      />
      <ServiceCardFramerComponent.Responsive
        ORC0vCUBE={"Game Development"}
        fEYrMcRJj={true}
        onO9zpjab={false}
        t7BJqRmXA={"Crafting immersive experiences through code, creativity, and mechanics."}
      />
      <MainButtonFramerComponent.Responsive
        Lmd8HWOEd={"/projects"}
        l8wRfdseT={"See All Projects"}
        n2SpUwZKz={false}
      />
      <CommentFramerComponent.Responsive
        JzGxG_LIS={"-am"}
        aAlN0eIgM={"Gaming is my escape from reality."}
      />
      <CallButtonFramerComponent.Responsive
        MTbjY8W81={"Contact Now"}
        lp4OUBzW4={false}
        yK7vydCEk={"/contact"}
      />
      <CursorGraphicFramerComponent.Responsive/>
      <ProjectCardFramerComponent.Responsive
        LllLN7r46={"/projects/:slug"}
      />
      <TagRedirectorFramerComponent.Responsive
        PiqWDVKsr={"(about me)"}
        x4erv7m4Z={"/#profile"}
      />
      <AvailabilityFramerComponent.Responsive
        jn909WTNI={" Available for work"}
        tCgMNdSJ8={"not available"}
      />
      <SocialMediaFramerComponent.Responsive
        YdTA2k7Lp={"https://x.com/aadzmsa"}
      />
    </div>
  );
};
// app\portfolio\about\page.js
import { Suspense } from 'react';
import AboutSummary from '@/app/ui/about/aboutSummary';
import Profile from '@/app/ui/about/profile';
import Education from '@/app/ui/about/education';
import Work from '@/app/ui/about/work';
import Skills from '@/app/ui/about/skills';
import { 
  AboutSummarySkeleton, 
  ProfileSkeleton, 
  EducationSkeleton, 
  SkillsSkeleton, 
  WorkSkeleton 
} from '@/app/lib/skeletons';

// About section
export default async function About(){
    return (
      <div>
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile />
        </Suspense>
        <Suspense fallback={<AboutSummarySkeleton />}>
          <AboutSummary />
        </Suspense>
        <Suspense fallback={<EducationSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<WorkSkeleton />}>
          <Work />
        </Suspense>
      </div>
    );
}

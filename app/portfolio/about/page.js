// app\portfolio\about\page.js
import { Suspense } from 'react';
import AboutSummary from '@/app/ui/about/aboutSummary';
import Profile from '@/app/ui/about/profile';
import Education from '@/app/ui/about/education';
import Work from '@/app/ui/about/work';
import Skills from '@/app/ui/about/skills';

// About section
export default async function About(){
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutSummary />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Education />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Work />
        </Suspense>
      </div>
    );
}

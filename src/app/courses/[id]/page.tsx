'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { getCourseByParam } from '@/data/courses';
import CourseHero from '@/components/custom_components/Course/CoursePost/CourseHero';
import CourseCurriculum from '@/components/custom_components/Course/CoursePost/CourseCurriculum';
import Testimonials from '@/components/custom_components/Course/CoursePost/Testimonials';
import StudentResults from '@/components/custom_components/Course/CoursePost/StudentResults';
import CourseCoverSection from '@/components/custom_components/Course/CoursePost/CourseCoverSection';
import heroImg from '@/assets/images/Background/course-bg.jpg';

export default function CourseDetails() {
  const params = useParams<{ id: string }>();
  const course = useMemo(() => getCourseByParam(params?.id ?? ''), [params]);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Course not found</h1>
          <p className="text-gray-400 mt-2">Please check the URL or return to courses.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CourseCoverSection
        backgroundImage={heroImg.src}
        title={course.title}
        subtitle={course.description}
      />
      {/* Main Course Hero Section */}
      <CourseHero
        image={course.overview.image}
        title={course.overview.title}
        subtitle={course.overview.subtitle}
        description={course.overview.description}
        courseInfo={course.overview.courseInfo}
        assignment={course.overview.assignment}
        prerequisites={course.overview.prerequisites}
        tools={course.overview.tools}
        pricing={course.overview.pricing}
      />

      {/* Course Curriculum Section */}
      <CourseCurriculum
        title={course.curriculum.title}
        weeks={course.curriculum.weeks}
      />

      {/* Testimonials Section */}
      <Testimonials
        title={course.testimonials.title}
        testimonials={course.testimonials.testimonials}
        ratingBreakdown={course.testimonials.ratingBreakdown}
        overallRating={course.testimonials.overallRating}
        qualityMetrics={course.testimonials.qualityMetrics}
      />

      {/* Student Results Section */}
      <StudentResults
        title={course.studentResults.title}
        description={course.studentResults.description}
        studentWorks={course.studentResults.studentWorks}
      />
    </div>
  );
}
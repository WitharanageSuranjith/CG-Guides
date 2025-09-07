'use client';

import React from "react";
import CourseCard from "@/components/custom_components/Card/CourseCard";
import CourseCoverSection from "@/components/custom_components/Course/CoursePost/CourseCoverSection";
import heroImg from "@/assets/images/Background/art-cover.png";
import { courses } from "@/data/courses";

type CourseCategory =
  | 'art'
  | 'drawing'
  | 'editing'
  | 'comic'
  | 'character'
  | 'storytelling'

export default function HomePage() {
  const [activeFilter, setActiveFilter] = React.useState<CourseCategory>('art');
  const [filteredCourses, setFilteredCourses] = React.useState(courses);

  const filterOptions = [
    { id: "art", label: "All", active: activeFilter === 'art' },
    { id: "drawing", label: "Drawing Foundation", active: activeFilter === 'drawing' },
    { id: "editing", label: "Image Editing", active: activeFilter === 'editing' },
    { id: "comic", label: "Comic & Cartoon", active: activeFilter === 'comic' },
    { id: "character", label: "Character Illustration", active: activeFilter === 'character' },
    { id: "storytelling", label: "Storytelling", active: activeFilter === 'storytelling' },
  ];

  const handleFilterChange = (id: string) => {
    const category = id as CourseCategory;
    setActiveFilter(category);
    setFilteredCourses(
      category === 'all'
        ? courses
        : courses.filter((course) => course.category === category)
    );
  };

  return (
    <main className="flex flex-col min-h-screen">
      <CourseCoverSection
        backgroundImage={heroImg.src}
        title={
          <>
            All <span className="text-orange-500">Courses</span>
          </>
        }
        subtitle="Gain the skills and knowledge you need to make an impact."
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
      />
      <section className="bg-[rgba(24,24,24,0.98)] py-12 px-8">
        <div className="max-w-7xl mx-auto  relative z-10 items-center justify-between gap-[15px]  w-full h-full">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-28">
              <h3 className="text-2xl font-bold text-white">No courses available</h3>
              <p className="text-gray-400 mt-2">
                We couldn&apos;t find any courses in this category. Try another filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
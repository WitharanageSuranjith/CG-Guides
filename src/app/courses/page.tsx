'use client';

import React from "react";
import CourseCard from "@/components/custom_components/Card/CourseCard";
import FilterHeroSection from "@/components/custom_components/Home/FliterHeroSection";
import heroImg from "@/assets/images/Background/course-bg.jpg";
import { courses } from "@/data/courses";

type CourseCategory =
  | 'all'
  | 'art'
  | '3d'
  | 'character'
  | 'game'
  | 'environment'
  | 'product'
  | 'video'
  | 'architectural';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = React.useState<CourseCategory>('all');
  const [filteredCourses, setFilteredCourses] = React.useState(courses);

  const filterOptions = [
    { id: "all", label: "All", active: activeFilter === 'all' },
    { id: "art", label: "Art & Illustration", active: activeFilter === 'art' },
    { id: "3d", label: "3D & Animation", active: activeFilter === '3d' },
    { id: "character", label: "Character Design", active: activeFilter === 'character' },
    { id: "game", label: "Game Arts", active: activeFilter === 'game' },
    { id: "environment", label: "Environment", active: activeFilter === 'environment' },
    { id: "product", label: "Product Design", active: activeFilter === 'product' },
    { id: "video", label: "Video & VFX", active: activeFilter === 'video' },
    { id: "architectural", label: "Architectural", active: activeFilter === 'architectural' },
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
      <FilterHeroSection
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
      <section className="bg-[rgba(24,24,24,0.98)] py-12">
        <div className="container mx-auto  relative z-10 items-center justify-between gap-[15px]  w-full h-full">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-28">
              <h3 className="text-2xl font-bold text-white">No courses available</h3>
              <p className="text-gray-400 mt-2">
                We couldn&apos;t find any courses in this category. Try another filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
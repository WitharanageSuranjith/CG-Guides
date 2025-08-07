// app/page.tsx
'use client'
import React from "react";
import CourseCard from "@/components/custom_components/Card/CourseCard";
import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import c2 from "@/assets/images/Courses Cover/CC2.jpg";
import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import c4 from "@/assets/images/Courses Cover/CC4.jpg";
import heroImg from "@/assets/images/Background/course-bg.webp";
import FilterHeroSection from "@/components/custom_components/Home/FliterHeroSection";
import { StaticImageData } from "next/image";

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

interface Course {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; 
  level: string;
  duration: string;
  href: string;
  category: CourseCategory;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
    category: "3d"
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c2,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/2",
    category: "environment"
  },
  {
    id: 3,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/3",
    category: "3d"
  },
  {
    id: 4,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c3,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/4",
    category: "environment"
  },
  {
    id: 5,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/5",
    category: "3d"
  },
  {
    id: 6,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c4,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/6",
    category: "environment"
  },
  {
    id: 7,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c4,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/7",
    category: "3d"
  },
  {
    id: 8,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c2,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/8",
    category: "environment"
  },
  {
    id: 9,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/9",
    category: "3d"
  },
  {
    id: 10,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c4,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/10",
    category: "environment"
  },
  {
    id: 11,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c3,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/11",
    category: "3d"
  },
  {
    id: 12,
    title: "Blender 3D Environment Painting",
    description: "Environment painting course",
    image: c2,
    level: "Beginner",
    duration: "20 Week",
    href: "/courses/12",
    category: "architectural"
  },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = React.useState<CourseCategory>('all');
  const [filteredCourses, setFilteredCourses] = React.useState<Course[]>(courses);

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
        : courses.filter(course => course.category === category)
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
      
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
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
                <CourseCard 
                  key={course.id} 
                  course={course} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
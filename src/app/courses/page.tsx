import CourseCard from "@/components/custom_components/Card/CourseCard";
import FeaturedCourses from "@/components/custom_components/Home/FeaturedCourses";

import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import c2 from "@/assets/images/Courses Cover/CC2.jpg";
import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import c4 from "@/assets/images/Courses Cover/CC4.jpg";

const courses = [
  {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/course1",
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Beginner - Intermediate",
    duration: "20 Week",
    href: "/course2",
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate - Advanced",
    duration: "12 Week",
    href: "/course3",
  },
  {
    id: 4,
    title: "Ultimate 3D Sculpting Blender Bundle",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Advanced",
    duration: "8 Week",
    href: "/course4",
  },
   {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/course1",
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Beginner - Intermediate",
    duration: "20 Week",
    href: "/course2",
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate - Advanced",
    duration: "12 Week",
    href: "/course3",
  },
  {
    id: 4,
    title: "Ultimate 3D Sculpting Blender Bundle",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Advanced",
    duration: "8 Week",
    href: "/course4",
  },
   {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/course1",
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Beginner - Intermediate",
    duration: "20 Week",
    href: "/course2",
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate - Advanced",
    duration: "12 Week",
    href: "/course3",
  },
  {
    id: 4,
    title: "Ultimate 3D Sculpting Blender Bundle",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Advanced",
    duration: "8 Week",
    href: "/course4",
  },
   {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/course1",
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Beginner - Intermediate",
    duration: "20 Week",
    href: "/course2",
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate - Advanced",
    duration: "12 Week",
    href: "/course3",
  },
  {
    id: 4,
    title: "Ultimate 3D Sculpting Blender Bundle",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Advanced",
    duration: "8 Week",
    href: "/course4",
  },

];

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative z-10 flex items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full pt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

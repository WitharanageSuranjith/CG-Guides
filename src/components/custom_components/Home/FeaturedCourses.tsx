import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import c2 from "@/assets/images/Courses Cover/CC2.jpg";
import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import c4 from "@/assets/images/Courses Cover/CC4.jpg";
import CourseCard from "@/components/custom_components/Card/CourseCard";
import Link from "next/link";


const courses = [
  {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/1",
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Beginner - Intermediate",
    duration: "20 Week",
    href: "/1",
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate - Advanced",
    duration: "12 Week",
    href: "/1",
  },
  {
    id: 4,
    title: "Ultimate 3D Sculpting Blender Bundle",
    description:
      "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Advanced",
    duration: "8 Week",
    href: "/1",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="relative bg-auto bg-bottom bg-[#000] bg-no-repeat h-auto w-full pt-[50px]  py-[75px] px-8">
      <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        <div className="flex justify-between w-full">
          <h1 className="text-[#FF6B35] font-semibold text-2xl md:text3xl lg:text-4xl leading-[40px] font-Poppins">
            Featured Courses.
          </h1>

          <h1 className="text-[#F1F1F1] font-medium text-sm sm:text-base lg:text-xl leading-[40px] font-Poppins">
            <Link href="/courses">All courses →</Link>
          </h1>
        </div>

        <h2 className="text-[#F1F1F1] font-medium text-[22px] leading-5 text-sm sm:text-base lg:text-xl font-Poppins mt-[5px]">
          Gain the skills and knowledge you need to make an impact.
        </h2>

        <div className="relative z-10 flex items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

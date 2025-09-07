import CourseCard from "@/components/custom_components/Card/CourseCard";
import Link from "next/link";
import { courses as allCourses } from "@/data/courses";

export default function FeaturedCourses() {
  // Build a card-safe subset to avoid passing functions (icons) across RSC boundary
  const courses = allCourses.slice(0, 4).map(({ id, title, description, image, level, duration, href }) => ({
    id,
    title,
    description,
    image,
    level,
    duration,
    href,
  }));
  return (
    <section className="relative bg-auto bg-bottom bg-[#000] bg-no-repeat h-auto w-full pt-[50px]  py-[75px] px-8">
      <div className="relative z-10 items-center justify-between gap-[15px] max-w-7xl mx-auto w-full h-full">
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

        <div className="relative z-10 flex items-center justify-between gap-[15px] max-w-7xl mx-auto w-full h-full pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
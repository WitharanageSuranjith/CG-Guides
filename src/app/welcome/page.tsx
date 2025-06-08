import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import CourseCard from "@/components/custom_components/Card/CourseCard";


export default function FeaturedCourses() {
  return (
    <section className="relative bg-auto bg-bottom bg-[#000000] bg-no-repeat h-auto w-full py-[60px] px-4">
    
<CourseCard
  course={{
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student’s choice",
    image: c1,
    level: "Advanced",
    duration: "16 Week",
    href: "/course/1"
  }}
/>

    </section>
  );
}

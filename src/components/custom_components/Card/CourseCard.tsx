'use client';

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  level: string;
  duration: string;
  href: string;
}

export default function CourseCard({ course }: { course: Course }) {
  const imageSrc = typeof course.image === 'string' 
    ? course.image 
    : course.image.src;

  return (
    <Link href={course.href} className="w-full">
      <div className="bg-white w-full md:h-[500px] rounded-2xl flex flex-col justify-between overflow-hidden hover:scale-105 duration-300">
        <Image
          src={imageSrc}
          alt="Course Thumbnail"
          className="rounded-[20px] object-cover aspect-[250/270] p-[10px] w-full min-h-[300px] h-full"
          width={400}
          height={300}
          {...(typeof course.image !== 'string' && {
            placeholder: "blur",
            blurDataURL: course.image.blurDataURL,
          })}
        />
        <div className="px-[15px] flex flex-col flex-grow">
          <h1 className="text-[#000] text-[20px] font-semibold font-Poppins leading-[25px]">
            {course.title}
          </h1>
          <p className="text-[#000] text-[12px] font-medium leading-[13px] pt-[5px]">
            {course.description}
          </p>
        </div>
        <div className="border-t border-[#ccc] w-full my-[8px]" />
        <div className="flex justify-between items-center text-black px-[15px] mb-[12px] mt-[6px] font-Poppins">
          <h3 className="text-[13px] font-medium">{course.level}</h3>
          <span className="text-[12px] font-medium border border-black px-[8px] py-[1px] rounded-full h-[20px] flex items-center justify-center whitespace-nowrap">
            {course.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}
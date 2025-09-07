'use client';

import { useState } from 'react';

interface WeekData {
  weekNumber: string;
  title: string;
  description: string;
}

interface CourseCurriculumProps {
  title: string;
  weeks: WeekData[];
}

const WeekItem = ({ week }: { week: WeekData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 lg:mb-12">
      <button
        onClick={toggleDropdown}
        className="w-full text-left focus:outline-none"
      >
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 flex justify-between items-center">
          <span>{week.weekNumber} - {week.title}</span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </h3>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          {week.description}
        </p>
      </div>
    </div>
  );
};

export default function CourseCurriculum({ title, weeks }: CourseCurriculumProps) {
  return (
    <section className="bg-black text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-8 lg:mb-12">
          {title}
        </h2>
        
        <div className="">
          {weeks.map((week, index) => (
            <WeekItem key={index} week={week} />
          ))}
        </div>
      </div>
    </section>
  );
}
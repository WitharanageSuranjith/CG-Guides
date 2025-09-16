'use client';

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
  return (
    <div className="mb-8 lg:mb-12">
      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
        {week.weekNumber} - {week.title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
        {week.description}
      </p>
    </div>
  );
};

export default function CourseCurriculum({ title, weeks }: CourseCurriculumProps) {
  return (
    <section className="bg-dark/90 text-white p-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-primary mb-4 lg:mb-8 font-Poppins font-normal text-[38px] sm:text-4xl lg:text-[38px] leading-tight">
          {title}
        </h2>
        
        <div className="text-white font-Poppins">
          {weeks.map((week, index) => (
            <WeekItem key={index} week={week} />
          ))}
        </div>
      </div>
    </section>
  );
}

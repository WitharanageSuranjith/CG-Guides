import React from "react";

export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

interface FilterHeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
  filterOptions?: FilterOption[];
  onFilterChange?: (id: string) => void;
}

const CourseCoverSection: React.FC<FilterHeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
}) => {
  return (
    <section className="relative bg-black overflow-hidden h-[520px] flex flex-col justify-end pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-white tracking-tight xl:text-[40px]">
            {title}
          </h1>
          <p className="text-lg text-white/80 xl:text-[22px]">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000d1] to-transparent" />
    </section>
  );
};

export default CourseCoverSection;
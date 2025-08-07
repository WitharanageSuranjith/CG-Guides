// components/custom_components/Home/FilterHeroSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";

export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

interface FilterHeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
  filterOptions: FilterOption[];
  onFilterChange?: (id: string) => void;
}

const FilterHeroSection: React.FC<FilterHeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  filterOptions,
  onFilterChange,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden h-[450px] flex flex-col justify-end pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat border"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-300">
            {subtitle}
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={option.active ? "default" : "outline"}
                onClick={() => onFilterChange?.(option.id)}
                className={`px-4 text-sm font-medium rounded-full transition-all ${
                  option.active 
                    ? "bg-white text-black hover:bg-gray-100 shadow-lg" 
                    : "bg-transparent text-gray-200 hover:bg-white/10 hover:text-white border-0"
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default FilterHeroSection;
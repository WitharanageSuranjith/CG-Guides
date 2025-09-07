'use client';

import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';

interface CourseInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface CourseHeroProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
  description: string;
  courseInfo: CourseInfo[];
  assignment: {
    title: string;
    description: string;
  };
  prerequisites: {
    title: string;
    description: string;
  };
  tools: {
    title: string;
    description: string;
  };
  pricing: {
    regularPrice: string;
    installmentAvailable: boolean;
  };
}

const CourseInfoItem = ({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: LucideIcon; 
  label: string; 
  value: string; 
}) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center space-x-3">
      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
      <span className="text-gray-300 text-sm lg:text-base">{label}</span>
    </div>
    <span className="text-white font-medium text-sm lg:text-base">{value}</span>
  </div>
);

export default function CourseHero({
  image,
  title,
  subtitle,
  description,
  courseInfo,
  assignment,
  prerequisites,
  tools,
  pricing,
}: CourseHeroProps) {
  return (
    <section className="bg-black text-white font-Poppins">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Column - Image and Title */}
          <div className="space-y-4 lg:space-y-6">
            {/* Character Image */}
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full rounded-lg object-cover"
                priority
              />
            </div>

            {/* Title Section */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                <span className="text-orange-500">{title}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white">
                {subtitle}
              </h2>
              <p className="text-gray-300 text-base lg:text-xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="space-y-4 lg:space-y-6">
            {/* Course Info Grid */}
            <div className="space-y-2">
              {courseInfo.map((item, index) => (
                <CourseInfoItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            {/* Assignment Section */}
            <div className="mt-6 lg:mt-8">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{assignment.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                {assignment.description}
              </p>
            </div>

            {/* Prerequisites Section */}
            <div className="mt-4 lg:mt-6">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{prerequisites.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                {prerequisites.description}
              </p>
            </div>

            {/* Tools & Software Section */}
            <div className="mt-4 lg:mt-6">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{tools.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                {tools.description}
              </p>
            </div>

            {/* Pricing Section */}
            <div className="mt-6 lg:mt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-gray-400 text-xs lg:text-sm mb-1">Regular price</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl lg:text-4xl text-white">{pricing.regularPrice}</span>
                  </div>
                  {pricing.installmentAvailable && (
                    <p className="text-gray-400 text-xs lg:text-sm">(Installment available)</p>
                  )}
                </div>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 lg:py-3 px-6 lg:px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center">
                  <FaWhatsapp className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span className="text-sm lg:text-base">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface StudentWork {
  id: number;
  image: string;
  title: string;
  student: string;
}

interface StudentResultsProps {
  title: string;
  description: string;
  studentWorks: StudentWork[];
}

const ImageCard = ({ work, className, index }: { work: StudentWork; className: string; index: number }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full min-h-[200px]">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="font-bold text-xs sm:text-sm mb-1">{work.title}</h4>
          <p className="text-gray-300 text-xs">by {work.student}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function StudentResults({ title, description, studentWorks }: StudentResultsProps) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl">
            {description}
          </p>
        </motion.div>

        {/* Mobile Layout (sm and below) */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-3">
            {studentWorks.slice(0, 8).map((work, index) => (
              <ImageCard 
                key={work.id}
                work={work} 
                className="aspect-square" 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Tablet Layout (sm to lg) */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-4 gap-4 auto-rows-[180px]">
            {/* First row */}
            <ImageCard work={studentWorks[0]} className="col-span-2 row-span-2" index={0} />
            <ImageCard work={studentWorks[1]} className="col-span-1 row-span-1" index={1} />
            <ImageCard work={studentWorks[2]} className="col-span-1 row-span-1" index={2} />
            
            {/* Second row */}
            <ImageCard work={studentWorks[3]} className="col-span-1 row-span-1" index={3} />
            <ImageCard work={studentWorks[4]} className="col-span-1 row-span-1" index={4} />
            
            {/* Third row */}
            <ImageCard work={studentWorks[5]} className="col-span-2 row-span-1" index={5} />
            <ImageCard work={studentWorks[6]} className="col-span-1 row-span-1" index={6} />
            <ImageCard work={studentWorks[7]} className="col-span-1 row-span-1" index={7} />
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">
            {/* Large left image - spans 3 columns, 4 rows */}
            <ImageCard 
              work={studentWorks[0]} 
              className="col-span-3 row-span-4" 
              index={0}
            />
            {/* Top middle square - spans 2 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[1]} 
              className="col-span-2 row-span-2" 
              index={1}
            />
            {/* Top right wide rectangle - spans 4 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[2]} 
              className="col-span-4 row-span-2" 
              index={2}
            />
            {/* Top far right portrait - spans 3 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[3]} 
              className="col-span-3 row-span-2" 
              index={3}
            />
            {/* Second row middle - spans 2 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[4]} 
              className="col-span-2 row-span-2" 
              index={4}
            />
            {/* Second row middle-right - spans 2 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[5]} 
              className="col-span-2 row-span-2" 
              index={5}
            />
            {/* Second row right - spans 2 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[6]} 
              className="col-span-2 row-span-2" 
              index={6}
            />
            {/* Second row far right - spans 3 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[7]} 
              className="col-span-3 row-span-2" 
              index={7}
            />
            {/* Bottom left under main image - spans 3 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[8]} 
              className="col-span-3 row-span-2" 
              index={8}
            />
            {/* Bottom middle - spans 2 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[9]} 
              className="col-span-2 row-span-2" 
              index={9}
            />
            {/* Bottom wide section - spans 4 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[10]} 
              className="col-span-4 row-span-2" 
              index={10}
            />
            {/* Bottom right - spans 3 columns, 2 rows */}
            <ImageCard 
              work={studentWorks[3]} 
              className="col-span-3 row-span-2" 
              index={11}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
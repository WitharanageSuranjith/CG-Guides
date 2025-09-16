'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentWork {
  id: number;
  image: string;
  title: string;
  student: string;
}

interface ImageGridProps {
  studentWorks: StudentWork[];
}

const ImageCard = ({
  work,
  className,
  index,
  onClick,
}: {
  work: StudentWork;
  className: string;
  index: number;
  onClick?: () => void;
}) => (
  <motion.div
    className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <div className="relative w-full h-full min-h-[200px]">
      <Image
        src={work.image}
        alt={work.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="font-bold text-xs sm:text-sm mb-1">{work.title}</h4>
        <p className="text-gray-300 text-xs">by {work.student}</p>
      </div>
    </div>
  </motion.div>
);

export default function ImageGrid({ studentWorks }: ImageGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const selectedWork = selectedIndex !== null ? studentWorks[selectedIndex] : null;

  // Arrow key navigation & Escape
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        setDirection(1);
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % studentWorks.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setDirection(-1);
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + studentWorks.length) % studentWorks.length : 0
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, studentWorks.length]);

  // Motion variants for smooth slide
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="bg-light">
      <div className="container mx-auto px-0">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-3">
            {studentWorks.slice(0, 8).map((work, index) => (
              <ImageCard
                key={work.id}
                work={work}
                className="aspect-square"
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-2 auto-rows-[180px]">
            {studentWorks.slice(0, 8).map((work, index) => (
              <ImageCard
                key={work.id}
                work={work}
                className="aspect-square"
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout - PRESERVED EXACTLY */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-[10px] auto-rows-[130px]">
            <ImageCard work={studentWorks[0]} className="col-span-3 row-span-3" index={0} onClick={() => setSelectedIndex(0)} />
            <ImageCard work={studentWorks[1]} className="col-span-3 row-span-2" index={1} onClick={() => setSelectedIndex(1)} />
            <ImageCard work={studentWorks[2]} className="col-span-4 row-span-1" index={2} onClick={() => setSelectedIndex(2)} />
            <ImageCard work={studentWorks[3]} className="col-span-2 row-span-2" index={3} onClick={() => setSelectedIndex(3)} />
            <ImageCard work={studentWorks[4]} className="col-span-2 row-span-1" index={4} onClick={() => setSelectedIndex(4)} />
            <ImageCard work={studentWorks[5]} className="col-span-2 row-span-1" index={5} onClick={() => setSelectedIndex(5)} />
            <ImageCard work={studentWorks[6]} className="col-span-2 row-span-2" index={6} onClick={() => setSelectedIndex(6)} />
            <ImageCard work={studentWorks[7]} className="col-span-4 row-span-2" index={7} onClick={() => setSelectedIndex(7)} />
            <ImageCard work={studentWorks[8]} className="col-span-3 row-span-1" index={8} onClick={() => setSelectedIndex(8)} />
            <ImageCard work={studentWorks[9]} className="col-span-3 row-span-1" index={9} onClick={() => setSelectedIndex(9)} />
            <ImageCard work={studentWorks[10]} className="col-span-3 row-span-3" index={10} onClick={() => setSelectedIndex(10)} />
            <ImageCard work={studentWorks[11]} className="col-span-2 row-span-2" index={11} onClick={() => setSelectedIndex(11)} />
            <ImageCard work={studentWorks[12]} className="col-span-4 row-span-2" index={12} onClick={() => setSelectedIndex(12)} />
            <ImageCard work={studentWorks[13]} className="col-span-3 row-span-2" index={13} onClick={() => setSelectedIndex(13)} />
          </div>
        </div>
      </div>

      {/* Fullscreen Popup */}
      <AnimatePresence initial={false} custom={direction}>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full h-[80vh]"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedWork.image} alt={selectedWork.title} fill className="object-contain" />
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>
              {/* Left/Right Arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                onClick={() => {
                  setDirection(-1);
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev - 1 + studentWorks.length) % studentWorks.length : 0
                  );
                }}
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                onClick={() => {
                  setDirection(1);
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev + 1) % studentWorks.length : 0
                  );
                }}
              >
                ›
              </button>

              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">{selectedWork.title}</h4>
                <p className="text-gray-300">by {selectedWork.student}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TestimonialData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  review: string;
}

interface RatingBreakdown {
  stars: number;
  count: number;
}

interface TestimonialsProps {
  title: string;
  testimonials: TestimonialData[];
  ratingBreakdown: RatingBreakdown[];
  overallRating: number;
  qualityMetrics: {
    communication: { label: string; rating: number };
    quality: { label: string; rating: number };
    value: { label: string; rating: number };
  };
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'fill-current' : 'text-white/80'}`}
        />
      ))}
    </div>
  );
};

const RatingBar = ({ stars, count, total }: { stars: number; count: number; total: number }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center space-x-3 mb-3">
      <span className="text-white text-sm font-medium w-12">{stars} Stars</span>
      <div className="flex-1 bg-white/10 rounded-full h-2 max-w-[200px]">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <span className="text-white/80 text-sm">({count})</span>
    </div>
  );
};

export default function Testimonials({
  title,
  testimonials,
  ratingBreakdown,
  overallRating,
  qualityMetrics,
}: TestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const totalReviews = ratingBreakdown.reduce((sum, rating) => sum + rating.count, 0);

  // Get current testimonial safely
  const currentTestimonialData = testimonials[currentTestimonial];

  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-dark/90 text-white p-8 pb-28 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.h2
          className="text-3xl lg:text-4xl xl:text-[38px] font-normal text-primary mb-8 lg:mb-12 font-Poppins "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Reviews Summary */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Reviews Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Reviews</h3>
              <div className="flex items-center space-x-2">
                <StarRating rating={overallRating} />
                <span className="text-2xl font-bold text-white ml-2">{overallRating.toFixed(1)}</span>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0">
              <div className="space-y-1 lg:max-w-[310px] w-full">
                {ratingBreakdown.map((rating, index) => (
                  <motion.div
                    key={rating.stars}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <RatingBar stars={rating.stars} count={rating.count} total={totalReviews} />
                  </motion.div>
                ))}
              </div>

              {/* Quality Metrics */}
              <div className="flex flex-col lg:max-w-[260px] w-full">
                <h4 className="text-lg font-semibold text-white mb-4">Rating Breakdown</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-base lg:text-lg">{qualityMetrics.communication.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                      <span className="text-white font-semibold text-base lg:text-lg">{qualityMetrics.communication.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-base lg:text-lg">{qualityMetrics.quality.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                      <span className="text-white font-semibold text-base lg:text-lg">{qualityMetrics.quality.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-base lg:text-lg">{qualityMetrics.value.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                      <span className="text-white font-semibold text-base lg:text-lg">{qualityMetrics.value.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Testimonial Card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Testimonial Card with proper AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 h-auto relative py-10"
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 100 : -100 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100 
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-start justify-between">
                  {/* Content */}
           

<div className="grid grid-cols-1 lg:grid-cols-4 gap-2 items-start">
  {/* Avatar with Name Below */}
  <div className="flex flex-col items-center text-center lg:col-span-1">
    <Image
      src={currentTestimonialData?.avatar || "/Website/maniacarta-blender.jpg"}
      alt={currentTestimonialData?.name || "User Avatar"}
      width={80}
      height={80}
      className="w-20 h-20 rounded-full object-cover"
    />
    <h4 className="text-white font-semibold text-lg mt-2">
      {currentTestimonialData?.name || "Anonymous"}
    </h4>
  </div>

  {/* Text Content */}
  <div className="flex-1 min-w-0 lg:col-span-3">
    {/* Header with Navigation Buttons */}
    <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
      {/* Header - Left Side */}
      <div className="flex items-center space-x-2">
        <span className="text-white font-semibold text-lg">
          {currentTestimonialData?.rating || 5} Rating
        </span>
        <span className="text-white/60">|</span>
        <span className="text-white/60 text-sm">
          {currentTestimonialData?.timeAgo || "Recently"}
        </span>
      </div>

      {/* Navigation Buttons - Right Side */}
      <div className="flex space-x-2">
        <button
          onClick={prevTestimonial}
          disabled={testimonials.length <= 1}
          className="p-1.5 bg-zinc-800/80 hover:bg-zinc-700 rounded-full border border-zinc-600 transition-colors duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 text-white/70" />
        </button>
        <button
          onClick={nextTestimonial}
          disabled={testimonials.length <= 1}
          className="p-1.5 bg-zinc-800/80 hover:bg-zinc-700 rounded-full border border-zinc-600 transition-colors duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4 text-white/70" />
        </button>
      </div>
    </div>

    {/* Review Text */}
    <p className="text-white/80 leading-relaxed text-base">
      {currentTestimonialData?.review?.length > 200
        ? currentTestimonialData.review.substring(0, 200) + "..."
        : currentTestimonialData?.review || "No review available"}
    </p>
  </div>
</div>


                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
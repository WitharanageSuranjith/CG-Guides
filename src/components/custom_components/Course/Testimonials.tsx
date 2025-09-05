'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
          className={`w-5 h-5 ${star <= rating ? 'fill-current' : 'text-gray-600'}`}
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
      <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[200px]">
        <motion.div
          className="bg-orange-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <span className="text-gray-400 text-sm">({count})</span>
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const totalReviews = ratingBreakdown.reduce((sum, rating) => sum + rating.count, 0);

  return (
    <section className="bg-black text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
            <div className="flex flex-row justify-between w-full">
              <div className="space-y-1 max-w-[310px] w-full">
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
              <div className="flex flex-col max-w-[260px] w-full">
                <h4 className="text-lg font-semibold text-white">Rating Breakdown</h4>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-lg">{qualityMetrics.communication.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-white font-semibold text-lg">{qualityMetrics.communication.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-lg">{qualityMetrics.quality.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-white font-semibold text-lg">{qualityMetrics.quality.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-lg">{qualityMetrics.value.label}</span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-white font-semibold text-lg">{qualityMetrics.value.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Testimonial Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Navigation Buttons */}
            <div className="flex items-center justify-end space-x-2 mb-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Testimonial Card */}
            <motion.div
              key={currentTestimonial}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white font-semibold text-lg">
                        {testimonials[currentTestimonial].rating} Rating
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].timeAgo}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-xl">
                      {testimonials[currentTestimonial].name}
                    </h4>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    {testimonials[currentTestimonial].review}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Course {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  courseCoverImg: any;
  level: string;
  duration: string;
  href: string;
  category: string;
  overview: {
    image: { src: string; alt: string; width: number; height: number };
    title: string;
    subtitle: string;
    description: string;
    courseInfo: Array<{ icon: LucideIcon; label: string; value: string }>;
    assignment: { title: string; description: string };
    prerequisites: { title: string; description: string };
    tools: { title: string; description: string };
    pricing: { regularPrice: string; installmentAvailable: boolean };
  };
  curriculum: {
    title: string;
    weeks: Array<{ weekNumber: string; title: string; description: string }>;
  };
  testimonials: {
    title: string;
    testimonials: Array<{
      id: number;
      name: string;
      avatar: string;
      rating: number;
      timeAgo: string;
      review: string;
    }>;
    ratingBreakdown: Array<{ stars: number; count: number }>;
    overallRating: number;
    qualityMetrics: {
      communication: { label: string; rating: number };
      quality: { label: string; rating: number };
      value: { label: string; rating: number };
    };
  };
  studentResults: {
    title: string;
    description: string;
    studentWorks: Array<{ id: number; image: string; title: string; student: string }>;
  };
}

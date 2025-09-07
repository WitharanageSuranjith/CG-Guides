import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import { Course } from "@/types/data";
import { Award, BookOpen, Clock, MessageSquare, Play, Users } from "lucide-react";

const course03: Course = {
  id: 3,
  title: "Master Cinematic Storytelling in Blender",
  description: "Learn cinematic techniques in Blender",
  image: c1,
  level: "Intermediate",
  duration: "16 Week",
  href: "/courses/3",
  category: "3d",
  overview: {
    image: {
      src: '/Website/david-letondor-david-letondor-lucile-gif-hd-v2-01-empute.gif',
      alt: '3D Character Creation',
      width: 600,
      height: 400,
    },
    title: 'Learn the fundamentals of character creation',
    subtitle: 'Learn the fundamentals of character creation',
    description:
      'This course covers the foundation of creating an appealing, production-ready character bust from start to finish. From blocking in and sculpting your character, to retopology and UVs, to texturing and presentation—by the end of the course you\'ll have a portfolio-ready character render.',
    courseInfo: [
      { icon: Play, label: 'Course Format', value: 'Standard' },
      { icon: Award, label: 'Skills Level', value: 'Intermediate to Advanced' },
      { icon: Clock, label: 'Duration', value: '9 weeks' },
      { icon: Users, label: 'Q&A', value: 'Once a week' },
      { icon: MessageSquare, label: 'Feedback', value: 'Individual recordings' },
      { icon: BookOpen, label: 'Lecture Type', value: 'Pre-recorded' },
    ],
    assignment: {
      title: 'Assignment',
      description:
        'Due each week. Expect to spend 10-20 hrs/wk viewing lectures, Q&A, and time on assignments.',
    },
    prerequisites: {
      title: 'Prerequisites',
      description:
        'Must have intermediate knowledge of Zbrush, Maya, or Max. Recommended course prereqs',
    },
    tools: {
      title: 'Tools & Software',
      description:
        'Maya (or equivalent), Mudbox (or equivalent), Arnold (or equivalent), ZBrush, Marvelous Designer, Substance Painter',
    },
    pricing: {
      regularPrice: 'LKR 25,000',
      installmentAvailable: true,
    },
  },
  curriculum: {
    title: "What's inside?",
    weeks: [
      {
        weekNumber: 'Week 1/2',
        title: 'Getting Started and Concept Art',
        description:
          "In chapter 1 you'll get a brief introduction into the course and in chapter 2 we'll explore the fundamentals of concept art, beginning with an introductory on its purpose and importance. We'll then dive into how to effectively use concept art in developing the character we'll be creating.",
      },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    testimonials: [],
    ratingBreakdown: [
      { stars: 5, count: 25 },
      { stars: 4, count: 3 },
      { stars: 3, count: 6 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    overallRating: 5.0,
    qualityMetrics: {
      communication: { label: 'Communication level', rating: 4.9 },
      quality: { label: 'Quality of delivery', rating: 4.9 },
      value: { label: 'Value of delivery', rating: 5.0 },
    },
  },
  studentResults: {
    title: 'Student results',
    description:
      'From novice creatives looking to jumpstart their career to seasoned pros adding to their toolkit, our students produce thoughtful, mind-blowing work. We want the world to see it.',
    studentWorks: [],
  },
};

export default course03;


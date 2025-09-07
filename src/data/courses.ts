import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import c2 from "@/assets/images/Courses Cover/CC2.jpg";
import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import c4 from "@/assets/images/Courses Cover/CC4.jpg";
import c5 from "@/assets/images/Courses Cover/CC5.jpg";
import c6 from "@/assets/images/Courses Cover/CC6.jpg";
import c7 from "@/assets/images/Courses Cover/CC7.jpg";
import c8 from "@/assets/images/Courses Cover/CC8.jpg";
import c9 from "@/assets/images/Courses Cover/CC9.jpg";

import { Course } from "@/types/data";
import { Award, BookOpen, Clock, MessageSquare, Play, Users } from "lucide-react";



export const courses: Course[] = [
  {
    id: 1,
    title: "Master Cinematic Storytelling in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c1,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
    category: "art",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
  {
    id: 2,
    title: "Blender 3D Environment Painting and Design",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c2,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
  {
    id: 3,
    title: "Master 3D Characters Sculpting in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c3,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
  {
    id: 4,
    title: " VFX and Cinematic Storytelling ",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c4,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
  {
    id: 5,
    title: "3D Product Animation in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c6,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
    {
    id: 6,
    title: "Master Cinematic Storytelling in Blender",
    description: "Learn cinematic techniques in Blender",
    image: c7,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
   {
    id: 7,
    title: "Game aset 3d making ",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c8,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/test",
    category: "3d",
    overview: {
      image: {
        src: '/Website/david-letondor-david-letondor-lucile-gif-hd-v2-01-empute.gif',
        alt: '3D Character Creation',
        width: 600,
        height: 400,
      },
      title: 'Game aset 3d making',
      subtitle: 'Game aset 3d making',
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },
  {
    id: 8,
    title: "Master Cinematic Storytelling in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c9,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },

    {
    id: 9,
    title: " Cinematic Storytelling in Blender",
    description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
    image: c5,
    level: "Intermediate",
    duration: "16 Week",
    href: "/courses/1",
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
        // ... other weeks
      ],
    },
    testimonials: {
      title: 'Testimonials',
      testimonials: [
        // ... testimonial data
      ],
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
      studentWorks: [
       
      ],
    },
  },

];
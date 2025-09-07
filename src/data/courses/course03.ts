import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import { Course } from "@/types/data";
import { Award, BookOpen, Clock, MessageSquare, Play, Users } from "lucide-react";

const course01: Course = {
  id: 3,
  title: "Master Cinematic Storytelling in Blender",
  description: "An 8-week course focused on creating stronger environment paintings based on a narrative of the student's choice",
  image: c3,
  level: "Intermediate",
  duration: "16 Week",
  href: "/courses/3",
  category: "character",
  overview: {
    image: {
      src: '/Website/Art and Illustration.jpg',
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
      {
        weekNumber: 'Week 3/4',
        title: 'Sculpting - Body',
        description:
          "Here we focus on sculpting our character's head and body, starting with rough blockouts and progressing to detailed facial features and anatomy. We'll also cover sculpting the torso, limbs, and a hair placeholder.",
      },
      {
        weekNumber: 'Week 5/6',
        title: 'Blockout - Shirt, Trousers and Boots',
        description:
          "Here we focus on creating a rough blockout for the initial layers of clothing, starting with the shirt, trousers, knee pads, and boots. By using an instance of our character as a base, we'll ensure that the proportions and overall shapes are dialed in before moving on to detailed sculpting.",
      },
      {
        weekNumber: 'Week 7/8',
        title: 'Block out - Sweater and Jetpack',
        description:
          'Here we focus on blocking out the sweater and jetpack, starting with creating the clothing layer, add a neck belt, and design the jetpack with straps, rings, thrusters, and wings.',
      },
      {
        weekNumber: 'Week 9',
        title: 'Retopology and UVs - Clothes',
        description:
          'In this chapter, we focus on retopology and UVs for all clothing pieces, starting with the shirt and applying both familiar and new techniques. We then move on to the trousers and other accessories, ensuring clean topology, proper UV packing, and final refinements for a polished result.',
      },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    testimonials: [
      {
        id: 1,
        name: 'Andy Agou',
        avatar: '/api/placeholder/80/80',
        rating: 5,
        timeAgo: '2 months ago',
        review:
          'CG Guides truly impressed me with their OUTSTANDING work in Industrial & Product Design! The visual appeal and professionalism were exceptional, far exceeding my expectations. Working with them was a delight, thanks to their proactive communication and dedication to going above and beyond. 👍',
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/80/80',
        rating: 5,
        timeAgo: '1 month ago',
        review:
          'Incredible course! The step-by-step approach made complex character creation concepts easy to understand. The instructor\'s expertise really shows in every lesson. Highly recommend for anyone serious about 3D character art.',
      },
      {
        id: 3,
        name: 'Mike Chen',
        avatar: '/api/placeholder/80/80',
        rating: 4,
        timeAgo: '3 weeks ago',
        review:
          'Great course with comprehensive content. The retopology sections were particularly valuable. Only minor suggestion would be more advanced texturing techniques, but overall excellent quality.',
      },
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
      { id: 1, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Cyberpunk Character', student: 'Alex Chen' },
      { id: 2, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Fantasy Characters', student: 'Maria Santos' },
      { id: 3, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Sci-Fi Scene', student: 'John Walker' },
      { id: 4, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Realistic Portrait', student: 'Sarah Kim' },
      { id: 5, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Anime Character', student: 'David Liu' },
      { id: 6, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Creature Design', student: 'Emma Johnson' },
      { id: 7, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Cartoon Character', student: 'Mike Rodriguez' },
      { id: 8, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Character Study', student: 'Lisa Brown' },
      { id: 9, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Fantasy Warrior', student: 'Tom Wilson' },
      { id: 10, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Warrior Squad', student: 'Anna Davis' },
      { id: 11, image: '/Website/7aca3f938877762b65a3acc55a7f3678.jpg', title: 'Portrait Study', student: 'Chris Garcia' },
    ],
  },
};

export default course01;



import { Course } from "@/types/data";
import course01 from "@/data/courses/course01";
import course02 from "@/data/courses/course02";
import course03 from "@/data/courses/course03";
import course04 from "@/data/courses/course04";
import course05 from "@/data/courses/course05";
import course06 from "@/data/courses/course06";
import course07 from "@/data/courses/course07";
import course08 from "@/data/courses/course08";
import course09 from "@/data/courses/course09";

// Aggregate all course modules here
export const courses: Course[] = [course01, course02, course03, course04, course05, course06, course07, course08, course09,];

// Helper to resolve a course by route param (id or slug)
export function getCourseByParam(param: string): Course | undefined {
  // Match by numeric id
  const byId = courses.find((c) => String(c.id) === param);
  if (byId) return byId;
  // Match by href tail segment (e.g., /courses/test -> test)
  const byHref = courses.find((c) => c.href.split("/").pop() === param);
  return byHref;
}

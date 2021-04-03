export interface ICourses {
  course_name: string;
  id: number;
  author: string;
  cost: number;
  tags: string[];
  discount_from: number;
  course_details: string;
}

export const key = "course";

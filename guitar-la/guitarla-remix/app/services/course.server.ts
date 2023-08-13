import type { BaseModelI } from "~/interfaces/base-response";

export interface CourseI extends BaseModelI {
  title: string;
  content: string;
}
export interface CourseResponseI {
  data: {
    id: number;
    attributes: CourseI;
  };
}
const URL = `${process.env.API_URL}/course?populate=image`;
export const getCourse = async (): Promise<CourseResponseI> => {
  const request = await fetch(URL);
  const course = await request.json();
  return course;
};

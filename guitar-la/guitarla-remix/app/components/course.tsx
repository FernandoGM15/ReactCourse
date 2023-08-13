import type { CourseResponseI } from "~/services/course.server";

interface CoursePropsI {
  courseResponse: CourseResponseI;
}
const Course = ({ courseResponse }: CoursePropsI) => {
  const { content, image, title } = courseResponse.data.attributes;
  return (
    <section className="course">
      <style>{`
        .course{
          background-image:linear-gradient(to right, rgba(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data.attributes.url});
          background-size:cover;
        }
      `}</style>
      <div className="container course-grid">
        <div className="content">
          <h2 className="heading">{title}</h2>
          <p className="text">{content}</p>
        </div>
      </div>
    </section>
  );
};
export default Course;

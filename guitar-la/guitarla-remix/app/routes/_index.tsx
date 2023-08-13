import type {
  LinksFunction,
  LoaderFunction,
  // V2_MetaFunction,
} from "@remix-run/node";
import type { PostResponseI } from "~/services/post.server";
import type { GuitarResponseI } from "~/services/guitars.server";
import type { CourseResponseI } from "~/services/course.server";
import { getGuitars } from "~/services/guitars.server";
import { getPosts } from "~/services/post.server";
import { getCourse } from "~/services/course.server";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar-list";
import PostList from "~/components/post-list";
import Course from "~/components/course";
import guitarStyles from "~/styles/shop.css";
import blogStyles from "~/styles/blog.css";
import courseStyles from "~/styles/course.css";

interface IndexResponsesI {
  guitars: GuitarResponseI;
  posts: PostResponseI;
  course: CourseResponseI;
}
// export const meta: V2_MetaFunction = () => {};
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: guitarStyles },
    { rel: "stylesheet", href: blogStyles },
    { rel: "stylesheet", href: courseStyles },
  ];
};

export const loader: LoaderFunction = async () => {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);
  return {
    guitars,
    posts,
    course,
  };
};

const Index = () => {
  const { guitars, posts, course } = useLoaderData<IndexResponsesI>();
  return (
    <>
      <main className="container">
        <GuitarList guitarResponse={guitars} />
      </main>
      <Course courseResponse={course} />
      <section className="container">
        <PostList postsResponse={posts} />
      </section>
    </>
  );
};
export default Index;

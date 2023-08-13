import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/post-list";
import { type PostResponseI, getPosts } from "~/services/post.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "GuitarLA - OurBlog" },
    { name: "description", content: "GuitarLA, Music blog and guitar selling" },
  ];
};

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return posts;
};
const BlogIndex = () => {
  const posts = useLoaderData<PostResponseI>();
  return <PostList postsResponse={posts} />;
};
export default BlogIndex;

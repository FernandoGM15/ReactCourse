import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import type { PostResponseI } from "~/services/post.server";
import { useLoaderData } from "@remix-run/react";
import { getPostByUrl } from "~/services/post.server";
import { formatDate } from "~/utils/helpers";

export const meta: V2_MetaFunction = ({ data }) => {
  if (!data) {
    return [
      { title: "GuitarLA - Entry not found" },
      {
        name: "description",
        content: "GuitarLA - Entry not found",
      },
    ];
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.title}` },
    {
      name: "description",
      content: `Guitars, guitar selling, ${data.data[0].attributes.title}`,
    },
  ];
};

export const loader = async ({ params }: LoaderArgs) => {
  const url: string = params.url ?? "";
  const posts = await getPostByUrl(String(url));
  if (posts.data.length === 0)
    throw new Response("Entry not found", { status: 404 });
  return posts;
};

const Post = () => {
  const post = useLoaderData<PostResponseI>();
  const { data } = post;
  const { title, content, image, publishedAt } = data[0].attributes;
  return (
    <article className="post mt-3">
      <img className="image" src={image.data.attributes.url} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
};
export default Post;

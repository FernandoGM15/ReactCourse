import type { PostI } from "~/services/post.server";
import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

const Post = ({ title, content, image, url, publishedAt }: PostI) => {
  return (
    <article className="post">
      <img
        className="image"
        src={image.data.attributes.formats.small.url}
        alt={title}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="resume">{content}</p>
        <Link className="link" to={`/blog/${url}`}>
          Read post
        </Link>
      </div>
    </article>
  );
};
export default Post;

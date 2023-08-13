import type { PostResponseI } from "~/services/post.server";
import Post from "./post";

interface PostPropsI {
  postsResponse: PostResponseI;
}
const PostList = ({ postsResponse }: PostPropsI) => {
  const { data } = postsResponse;
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {data.map((post) => (
          <Post key={post.id} {...post.attributes} />
        ))}
      </div>
    </>
  );
};
export default PostList;

import type { BaseModelI, BaseResponseI } from "~/interfaces/base-response";

export interface PostI extends BaseModelI {
  title: string;
  content: string;
  url: number;
}

export interface PostResponseI extends BaseResponseI {
  data: {
    id: number;
    attributes: PostI;
  }[];
}

const URL = `${process.env.API_URL}/posts?populate=image`;

export const getPosts = async (): Promise<PostResponseI> => {
  const req = await fetch(URL);
  const posts = await req.json();
  return posts;
};

export const getPostByUrl = async (url: string): Promise<PostResponseI> => {
  const req = await fetch(`${URL}&filters[url]=${url}`);
  const posts = await req.json();
  return posts;
};

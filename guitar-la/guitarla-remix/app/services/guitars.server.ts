export interface GuitarI {
  name: string;
  description: string;
  price: number;
  url: string;
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
        };
      };
    };
  };
}

export interface GuitarResponseI {
  data: {
    id: number;
    attributes: GuitarI;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const URL = `${process.env.API_URL}/guitars?populate=image`;

export const getGuitars = async () => {
  const request = await fetch(URL);
  const guitars = (await request.json()) as GuitarResponseI;
  return guitars;
};

export const getGuitarByName = async(url:string)=>{
  const request = await fetch(`${URL}&filters[url]=${url}`);
  const guitar = (await request.json()) as GuitarResponseI;
  return guitar;
}
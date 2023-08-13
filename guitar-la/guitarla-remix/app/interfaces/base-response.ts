export interface BaseResponseI {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BaseModelI {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: {
      attributes: {
        url: string;
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
        };
      };
    };
  };
}

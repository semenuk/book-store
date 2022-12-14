export interface Page<T> {
  data: PageItem<T>[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    }
  };
}

export interface PageItem<T> {
  id: number;
  attributes: T;
}

export interface SinglePage<T> {
  data: PageItem<T>;
  meta: {};
}

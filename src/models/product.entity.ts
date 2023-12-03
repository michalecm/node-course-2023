export interface ProductEntity {
    id: string; // uuid
    title: string;
    description: string;
    price: number;
  }
  
export const Book: ProductEntity = {
    id: '51422fcd-0366-4186-ad5b-c23059b6f64f',
    title: 'Book',
    description: 'A very interesting book',
    price: 100
}

export const Television: ProductEntity = {
  id: '834e9105-6655-46f1-b016-58d8af7c988f',
  title: 'TV',
  description: 'A very interesting TV',
  price: 200
}

export const House: ProductEntity = {
  id: 'dda4c1d9-84b2-4414-9523-fd44f7d1fba6',
  title: 'TV',
  description: 'A very interesting house',
  price: 200
}

export const Car: ProductEntity = {
  id: '2c063452-8ae2-47b2-9e39-b93a7edd15a1',
  title: 'TV',
  description: 'A very interesting house',
  price: 900
}

export const Pet: ProductEntity = {
  id: '0339285c-3f1c-4ce4-b2ce-bdf5d58fac83',
  title: 'TV',
  description: 'A very interesting house animal',
  price: 1000
}


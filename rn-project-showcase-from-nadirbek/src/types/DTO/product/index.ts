import { Sort } from 'types/common/sort';
import { Category } from 'types/DTO/category';
import { Pagination } from 'types/DTO/pagination';
import { NO_SIZE_VALUE } from 'constants/defaultSettings';

export interface ProductSize {
  id: number;
  size: number | typeof NO_SIZE_VALUE;
}

export interface ProductPhoto {
  thumb: string;
  original: string;
  small_thumb: string;
}

export interface ProductColor {
  id: number;
  color: string;
}

export interface Label {
  id: number;
  text: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  label: Label[];
  favorite: boolean;
  old_price: string;
  sizes: ProductSize[];
  season: string | null;
  article: string | null;
  photos: ProductPhoto[];
  colors: ProductColor[];
  description: string | null;
  current_color: ProductColor;
}

export interface RatingInfo {
  count: number;
  average_rating: number;
  photos: ProductPhoto[][];
}

export interface Rating {
  id: number;
  text: string;
  user: string;
  rating: number;
  created_at: string;
  photos: ProductPhoto[];
}

export interface RatingResponse extends Pagination<Rating> {
  review_available: boolean;
}

export interface RatingRequest {
  id: Product['id'];
  formData: FormData;
}

export interface FetchByCategoryIdRequest {
  sort: Sort;
  page: number;
  per_page?: number;
  id: Category['id'];
}
export interface FetchByCategoryIdFilteredResponse {
  colors: string[];
  sizes: string[];
  count_products: [number];
}
export interface FetchByCategoryIdFilteredRequest {
  price_to?: number;
  price_from?: number;
}

export interface ProductColorWithSizes extends ProductColor {
  sizes: ProductSize[];
}

export interface FetchReviewsRequest {
  sort: Sort;
  id: Product['id'];
}

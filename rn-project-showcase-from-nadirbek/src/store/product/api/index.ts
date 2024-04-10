import {
  Rating,
  Product,
  RatingInfo,
  RatingRequest,
  RatingResponse,
  ProductColorWithSizes,
  FetchByCategoryIdRequest,
  FetchReviewsRequest,
} from 'types/DTO/product';
import isEqual from 'lodash.isequal';
import { Pagination } from 'types/DTO/pagination';
import { reducerPaths } from 'constants/reducerPaths';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'services/http/axiosBaseQuery';
import { Filters, FiltersResponse } from 'types/common/filters';
import { prepareFiltersQueryString } from 'utils/prepareFiltersQueryString';

export const productsApi = createApi({
  reducerPath: reducerPaths.products,
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    'Product',
    'ColorSizes',
    'Viewed',
    'Products',
    'ReviewInfos',
    'Reviews',
  ],
  endpoints: build => {
    return {
      fetchProductById: build.query<Product, Product['id']>({
        query: id => ({
          url: `products/${id}`,
          method: 'get',
        }),
        providesTags: ['Product'],
      }),
      fetchColorsWithSizes: build.query<ProductColorWithSizes[], Product['id']>(
        {
          query: id => ({
            url: `products/${id}/colors`,
            method: 'get',
          }),
          providesTags: ['ColorSizes'],
        },
      ),
      fetchRecentlyViewed: build.query<Product[], void>({
        query: () => ({
          url: 'viewed',
          method: 'get',
        }),
        providesTags: ['Viewed'],
      }),
      fetchByCategoryId: build.query<
        Pagination<Product>,
        FetchByCategoryIdRequest
      >({
        query: ({ id, page = 1, per_page = 5, sort, ...filters }) => ({
          url: `categories/${id}?${prepareFiltersQueryString(filters)}`,
          method: 'get',
          params: {
            page,
            per_page,
            apply_filters: true,
            ...sort,
          },
        }),
        merge: (prevState, nextState) => {
          if (nextState.page === 1) {
            return nextState;
          }

          return {
            ...nextState,
            items: [...prevState.items, ...nextState.items],
          };
        },
        serializeQueryArgs: ({ endpointName, queryArgs: { id } }) => {
          return { endpointName, id };
        },
        forceRefetch({ currentArg, previousArg }) {
          return !isEqual(previousArg, currentArg);
        },
      }),
      fetchByCategoryIdFiltered: build.query<
        FiltersResponse,
        Filters & { id: number }
      >({
        query: ({ id, ...filterParams }) => ({
          url: `categories/${id}?${prepareFiltersQueryString(filterParams)}`,
          method: 'get',
          params: {
            apply_filters: false,
          },
        }),
      }),
      fetchReviewInfos: build.query<RatingInfo, Product['id']>({
        query: (id: number) => ({
          url: `/products/${id}/review_infos`,
          method: 'get',
        }),
        providesTags: ['ReviewInfos'],
      }),
      fetchReviews: build.query<RatingResponse, FetchReviewsRequest>({
        query: ({ id, sort }) => ({
          url: `products/${id}/reviews`,
          method: 'get',
          params: {
            ...sort,
          },
        }),
        providesTags: ['Reviews'],
      }),
      createReview: build.mutation<Rating, RatingRequest>({
        query: data => {
          const { id, formData } = data;

          return {
            url: `products/${id}/reviews`,
            method: 'post',
            data: formData,
          };
        },
        invalidatesTags: ['ReviewInfos', 'Reviews'],
      }),
      productPhotos: build.query<any, { id: number; color_id: number }>({
        query: ({ id, color_id }) => ({
          url: `products/${id}/photos`,
          method: 'get',
          params: {
            color_id,
          },
        }),
      }),
    };
  },
});

export const {
  useFetchProductByIdQuery,
  useFetchColorsWithSizesQuery,
  useFetchRecentlyViewedQuery,
  useFetchByCategoryIdQuery,
  useFetchByCategoryIdFilteredQuery,
  useFetchReviewInfosQuery,
  useFetchReviewsQuery,
  useCreateReviewMutation,
  useProductPhotosQuery,
} = productsApi;

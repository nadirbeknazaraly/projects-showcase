import isEqual from 'lodash.isequal';
import { Search } from 'types/DTO/search';
import { Product } from 'types/DTO/product';
import { Category } from 'types/DTO/category';
import { Pagination } from 'types/DTO/pagination';
import { reducerPaths } from 'constants/reducerPaths';
import { Banner, UserStatus } from 'types/DTO/banner';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'services/http/axiosBaseQuery';
import { Event, EventProductsRequest } from 'types/DTO/event';
import { CityInfo, DiscountData } from 'types/DTO/dictionaries';
import { Filters, FiltersResponse } from 'types/common/filters';
import { prepareFiltersQueryString } from 'utils/prepareFiltersQueryString';

export const dictionariesApi = createApi({
  reducerPath: reducerPaths.dictionaries,
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Status', 'EventProducts'],
  endpoints: build => ({
    shopAddresses: build.query<CityInfo[], void>({
      query: () => ({
        url: 'shop_addresses',
        method: 'GET',
      }),
    }),
    events: build.query<Event[], void>({
      query: () => ({
        url: 'events',
        method: 'GET',
      }),
    }),
    categories: build.query<Category[], void>({
      query: () => ({
        url: 'categories',
        method: 'get',
      }),
    }),
    search: build.query<Pagination<Search>, string>({
      query: text => ({
        url: `search`,
        method: 'get',
        params: {
          text,
        },
      }),
    }),
    banners: build.query<Banner[], void>({
      query: () => ({
        url: 'banners',
        method: 'get',
      }),
    }),
    status: build.query<UserStatus, void>({
      query: () => ({
        url: 'users/status',
        method: 'get',
      }),
      providesTags: ['Status'],
    }),
    eventProducts: build.query<Pagination<Product>, EventProductsRequest>({
      query: ({ id, page = 1, per_page = 5, sort, ...filters }) => ({
        url: `events/${id}?${prepareFiltersQueryString(filters)}`,
        method: 'get',
        params: { apply_filters: true, page, per_page, ...sort },
      }),
      providesTags: ['EventProducts'],
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
    eventProductsFiltered: build.query<
      FiltersResponse,
      { id: number } & Filters
    >({
      query: ({ id, ...filters }) => ({
        url: `events/${id}?${prepareFiltersQueryString(filters)}`,
        method: 'get',
        params: { apply_filters: false },
      }),
    }),
    discountLevels: build.query<DiscountData, void>({
      query: () => ({
        url: 'discount_levels',
        method: 'get',
      }),
    }),
  }),
});

export const {
  useShopAddressesQuery,
  useCategoriesQuery,
  useEventsQuery,
  useSearchQuery,
  useBannersQuery,
  useStatusQuery,
  useEventProductsQuery,
  useEventProductsFilteredQuery,
  useDiscountLevelsQuery,
} = dictionariesApi;

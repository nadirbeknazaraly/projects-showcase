import { Dispatch, SetStateAction } from 'react';
import { Filters, FiltersResponse } from 'types/common/filters';

export interface RouteParams {
  id: number;
  name: string;
  filters: Filters;
}

export interface FiltersActions {
  resetFilters: () => void;
  setPriceTo: (value: string) => void;
  setSizes: (value: number[]) => void;
  setColors: (value: string[]) => void;
  setPriceFrom: (value: string) => void;
  setFiltersTo: (value: Filters) => void;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export interface FilterScreenProps {
  filters: Filters;
  onAccept: () => void;
  isFetching?: boolean;
  data?: FiltersResponse;
  setters: FiltersActions;
}

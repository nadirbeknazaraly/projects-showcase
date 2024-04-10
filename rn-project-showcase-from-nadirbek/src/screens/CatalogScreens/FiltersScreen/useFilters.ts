import { useState } from 'react';
import { FiltersActions } from './types';
import { Filters } from 'types/common/filters';

export const RESET_FILTERS: Filters = {
  sizes: [],
  colors: [],
  price_to: '',
  price_from: '',
};

export const useFilters = (
  initialFilters = RESET_FILTERS,
): [Filters, FiltersActions] => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const setPriceFrom = (value: string): void => {
    setFilters({ ...filters, price_from: value });
  };

  const setPriceTo = (value: string): void => {
    setFilters({ ...filters, price_to: value });
  };

  const setColors = (value: string[]): void => {
    setFilters({ ...filters, colors: value });
  };
  const setSizes = (value: number[]): void => {
    setFilters({ ...filters, sizes: value });
  };

  const setFiltersTo = (value: Filters) => {
    setFilters(value);
  };

  const resetFilters = (): void => {
    setFilters(RESET_FILTERS);
  };

  return [
    filters,
    {
      setPriceFrom,
      setPriceTo,
      resetFilters,
      setColors,
      setSizes,
      setFilters,
      setFiltersTo,
    },
  ];
};

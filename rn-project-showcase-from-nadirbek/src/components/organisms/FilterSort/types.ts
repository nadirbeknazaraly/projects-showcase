import { Sort } from 'types/common/sort';
import { Filters } from 'types/common/filters';
import { FiltersActions } from 'screens/CatalogScreens/FiltersScreen/useFilters';

export interface FilterSortProps {
  id?: number;
  name?: string;
  sort?: Sort;
  filters: Filters;
  hideFilters?: boolean;
  resetPage?: () => void;
  setters: FiltersActions;
  chooseSort: (newSort: Sort) => void;
}

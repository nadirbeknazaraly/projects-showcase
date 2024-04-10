import { FiltersScreen } from '.';
import { RouteParams } from './types';
import { useFilters } from './useFilters';
import { useRoute } from '@react-navigation/native';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useDebounceValue } from 'hooks/useDebounceValue';
import { useFetchByCategoryIdFilteredQuery } from 'store/product/api';

export const CategoryFiltersScreen = () => {
  const route = useRoute();
  const navigation = useAppNavigation();
  const { id, name, filters: routeFilters } = route.params as RouteParams;

  const [filters, setters] = useFilters(routeFilters);

  const handleOnPress = () => {
    navigation.replace('ResultsScreen', { filters, id, name });
  };

  const [debouncedFilters] = useDebounceValue(filters, 200);

  const { data, isFetching } = useFetchByCategoryIdFilteredQuery({
    id,
    ...debouncedFilters,
  });

  return (
    <FiltersScreen
      isFetching={isFetching}
      data={data}
      filters={filters}
      setters={setters}
      onAccept={handleOnPress}
    />
  );
};

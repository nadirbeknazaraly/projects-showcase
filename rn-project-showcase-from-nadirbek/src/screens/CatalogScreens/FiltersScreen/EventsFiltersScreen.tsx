import { FiltersScreen } from '.';
import { RouteParams } from './types';
import { useFilters } from './useFilters';
import { useRoute } from '@react-navigation/native';
import { useDebounceValue } from 'hooks/useDebounceValue';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEventProductsFilteredQuery } from 'store/dictionaries/api';

export const EventsFiltersScreen = () => {
  const route = useRoute();
  const navigation = useAppNavigation();
  const { id, name, filters: routeFilters } = route.params as RouteParams;

  const [filters, setters] = useFilters(routeFilters);

  const handleOnPress = () => {
    navigation.replace('EventProductsScreen', { filters, id, name });
  };

  const [debouncedFilters] = useDebounceValue(filters, 200);

  const { data, isFetching } = useEventProductsFilteredQuery({
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

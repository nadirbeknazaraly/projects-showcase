import { FiltersScreen } from '.';
import { RouteParams } from './types';
import { useFilters } from './useFilters';
import { IFilters } from 'types/common/filters';
import { useRoute } from '@react-navigation/native';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useDebounceValue } from 'hooks/useDebounceValue';
import { useFetchWishlistFiltersQuery } from 'store/wishlist/api';

export const WishlistFiltersScreen = () => {
  const route = useRoute();
  const navigation = useAppNavigation();
  const { filters: routeFilters } = route.params as RouteParams;

  const [filters, setters] = useFilters(routeFilters);

  const handleOnPress = () => {
    navigation.replace('WishlistScreen', { filters });
  };

  const [debouncedFilters] = useDebounceValue(filters, 200);

  const { data, isFetching } = useFetchWishlistFiltersQuery({
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

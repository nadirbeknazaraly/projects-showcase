import { View } from 'react-native';
import isEqual from 'lodash.isequal';
import { FilterSortProps } from './types';
import { makeStyles } from '@rneui/themed';
import { FilterBadges } from './FilterBadges';
import { useTranslation } from 'react-i18next';
import { Button, Icon } from 'components/atoms';
import { SORT_ITEMS } from 'constants/defaultSettings';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { RESET_FILTERS } from 'screens/CatalogScreens/FiltersScreen/useFilters';

const FilterSort = ({
  id,
  name,
  chooseSort,
  sort,
  filters = {},
  resetPage,
  hideFilters = false,
  setters,
}: FilterSortProps) => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const { t } = useTranslation();

  const handleOnPress = () => {
    resetPage?.();
    navigation.replace('FiltersScreen', { id, name, filters });
  };

  const onlyEmptyItems = Object.values(filters).every(
    value => !value || (Array.isArray(value) && value.length === 0),
  );

  const hasFilters =
    !isEqual(RESET_FILTERS, filters) &&
    !!Object.keys(filters).length &&
    !onlyEmptyItems;

  return (
    <View>
      <View style={styles.container}>
        <Button
          disabled={hideFilters}
          type="clear"
          onPress={handleOnPress}
          buttonStyle={[styles.filter, hideFilters && { opacity: 0.5 }]}
          title={t('productCatalog.filters')}
          icon={
            <View style={{ position: 'relative' }}>
              <Icon size={24} name="icon--filters-main" />
              {hasFilters && <View style={styles.filterCircle} />}
            </View>
          }
        />
        <SelectSorting
          sortItems={SORT_ITEMS}
          chooseSort={chooseSort}
          sort={sort}
        />
      </View>
      <FilterBadges filters={filters} setters={setters} />
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  filterCircle: {
    position: 'absolute',
    width: theme.spacing.xs,
    height: theme.spacing.xs,
    right: 0,
    top: 2,
    backgroundColor: theme.colors.primary,
    borderRadius: 1000,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter: {
    paddingLeft: 0,
  },
}));

export default FilterSort;

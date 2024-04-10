import { useState } from 'react';
import { View } from 'react-native';
import { RouteParams } from './types';
import { useSort } from 'hooks/useSort';
import { Sort } from 'types/common/sort';
import { Loader } from 'components/atoms';
import { makeStyles } from '@rneui/themed';
import { Title } from 'components/molecules';
import { useRoute } from '@react-navigation/native';
import { useFilters } from '../FiltersScreen/useFilters';
import { DEFAULT_SORT } from 'constants/defaultSettings';
import { FilterSort, ListCard } from 'components/organisms';
import { useFetchByCategoryIdQuery } from 'store/product/api';

const ResultScreen = () => {
  const styles = useStyles();
  const route = useRoute();
  const { id, name, filters } = route.params as RouteParams;
  const [page, setPage] = useState(1);
  const { sort, chooseSort } = useSort(DEFAULT_SORT);
  const [activeFilters, setters] = useFilters(filters);
  const { data, isLoading, isUninitialized, isError, isFetching } =
    useFetchByCategoryIdQuery({ id, page, sort, ...activeFilters });

  const sortWithPageReset = (newSort: Sort) => {
    setPage(1);
    chooseSort(newSort);
  };

  const handleOnEndReached = () => {
    if (data && data.total_pages > page) {
      setPage(prevState => prevState + 1);
    }
  };

  if (isLoading || isUninitialized) return <Loader />;
  if (isError) return null;

  return (
    <>
      <View style={styles.header}>
        <Title title={name} />
        <FilterSort
          id={id}
          name={name}
          resetPage={() => {
            setPage(1);
          }}
          chooseSort={sortWithPageReset}
          sort={sort}
          filters={activeFilters}
          setters={setters}
        />
      </View>
      <ListCard
        data={data}
        onEndReached={handleOnEndReached}
        contentContainerStyle={[isFetching && { opacity: 0.5 }]}
      />
    </>
  );
};

const useStyles = makeStyles(theme => ({
  header: {
    gap: theme.spacing.xs * 0.5,
    paddingHorizontal: theme.spacing.md,
  },
}));

export default ResultScreen;

import { ListCardProps } from './types';
import { Loader } from 'components/atoms';
import { makeStyles } from '@rneui/themed';
import { Card } from 'components/organisms';
import { Dimensions, FlatList, View } from 'react-native';

const CELL_COUNT = 2;

const ListCard = (props: ListCardProps) => {
  const { data, onEndReached: handleOnEndReached = () => {}, ...other } = props;
  const styles = useStyles();

  if (!data) return <Loader />;

  return (
    <FlatList
      {...other}
      style={styles.flatList}
      numColumns={CELL_COUNT}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Card key={item.id} product={item} />
        </View>
      )}
      onEndReachedThreshold={0.1}
      onEndReached={handleOnEndReached}
      data={Array.isArray(data) ? data : data.items}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={[
        styles.contentContainerStyle,
        props.contentContainerStyle,
      ]}
      keyExtractor={(item, index) => `${item.id}:${index}`}
    />
  );
};

const useStyles = makeStyles(theme => ({
  flatList: {
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  card: {
    width:
      (Dimensions.get('window').width -
        theme.spacing.xl * 1.2 -
        theme.spacing.xs) /
      2,
  },
  columnWrapperStyle: {
    gap: theme.spacing.xs,
  },
  contentContainerStyle: {
    paddingBottom: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
}));

export default ListCard;

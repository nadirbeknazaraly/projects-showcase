import { Product } from 'types/DTO/product';
import { FlatListProps } from 'react-native';
import { IPagination } from 'types/DTO/pagination';

export interface ListCardProps
  extends Omit<
    FlatListProps<IProduct>,
    'data' | 'numColumns' | 'renderItem' | 'columnWrapperStyle' | 'keyExtractor'
  > {
  data: IPagination<IProduct> | IProduct[];
  onEndReached?: () => void;
}

import { PressableProps } from 'react-native';
import { Category, SubCategory } from 'types/DTO/category';

export interface CategoryProps extends PressableProps {
  category: Category | SubCategory;
}

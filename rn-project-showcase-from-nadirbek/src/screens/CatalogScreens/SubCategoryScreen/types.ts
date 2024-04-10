import { Categor, SubCategory } from 'types/DTO/category';

export interface RouteParams {
  name: Categor['name'];
  subcategory: SubCategory[];
}

import { Search } from 'types/DTO/search';

export interface RouteParams {
  id: Search['id'];
  name: Search['name'];
  filters: {
    price_from: string;
    price_to: string;
  };
}

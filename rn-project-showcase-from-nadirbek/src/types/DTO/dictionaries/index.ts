export interface Address {
  id: number;
  street: string;
  latitude: number;
  longitude: number;
  description: string;
}

export interface AddressWithCity extends Address {
  city: string;
}

export interface CityInfo {
  city: string;
  addresses: Address[];
}

export type ShortAddressInfo = Pick<AddressWithCity, 'city' | 'street' | 'id'>;

export interface Discount {
  name: string;
  value: number;
  amount_to: number;
  amount_from: number;
  amount_next: number;
  description: string | null;
}

export interface DiscountData {
  discounts: Discount[];
  current_discount: Discount;
}

import { useQuery } from '@apollo/react-hooks';

import { Company } from 'queries';

export default function useCities () {
  const { loading, data } = useQuery(Company.Cities);
  const { cities = [] } = data || {};

  return ({ loading, cities });
}

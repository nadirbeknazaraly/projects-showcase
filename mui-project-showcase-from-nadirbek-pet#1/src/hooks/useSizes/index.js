import { useQuery } from '@apollo/react-hooks';

import { Company } from 'queries';

export default function useCities () {
  const { loading, data } = useQuery(Company.Sizes);
  const { sizes = [] } = data || {};

  return ({ loading, sizes });
}

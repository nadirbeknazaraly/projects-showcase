import { useLocation } from 'react-router-dom';

export default function useURLQuery () {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const response = {};

  query.forEach((value, key) => {
    let formatted = value;

    if (value === 'true') {
      formatted = true;
    }

    if (value === 'false') {
      formatted = false;
    }

    response[key] = formatted;
  });

  return response;
}

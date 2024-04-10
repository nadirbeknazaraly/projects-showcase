import {
  useState,
  useEffect,
} from 'react';

import { DEFAULT_DELAY } from './constants';

export default function useDebounce (incoming, delay = DEFAULT_DELAY) {
  const [value, setValue] = useState(incoming);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(incoming);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [incoming, delay]);

  return value;
}

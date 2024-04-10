import React from 'react';
import { Search } from 'types/DTO/search';
import { DebouncedState } from 'hooks/useDebounceCallback';

export interface InputSearchProps {
  text: string;
  items?: Search[];
  resetText: () => void;
  debouncedSetText: DebouncedState<
    React.Dispatch<React.SetStateAction<string>>
  >;
}

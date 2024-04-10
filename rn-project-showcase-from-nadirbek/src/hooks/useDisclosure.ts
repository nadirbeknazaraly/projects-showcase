import { useState } from 'react';

type DisclosureHandlers = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const useDisclosure = (initialState = false): [boolean, DisclosureHandlers] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return [isOpen, { open, close, toggle }];
};

export default useDisclosure;

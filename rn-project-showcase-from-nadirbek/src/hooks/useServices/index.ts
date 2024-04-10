import _i18n, { i18n } from 'i18next';

interface ServicesProps {
  i18n: i18n;
}

export const useServices = (): ServicesProps => {
  return {
    i18n: _i18n,
  };
};

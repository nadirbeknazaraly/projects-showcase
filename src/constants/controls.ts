export const VARIANT = {
  WITH_IMAGE: 'WITH_IMAGE',
  WITHOUT_IMAGE: 'WITHOUT_IMAGE'
};

export const SIZE = {
  BIG: 'BIG',
  SMALL: 'SMALL'
};

export const VARIANT_OPTIONS = [
  {
    text: 'Variant 1',
    value: VARIANT.WITH_IMAGE
  },
  {
    text: 'Variant 2',
    value: VARIANT.WITHOUT_IMAGE
  }
];

export const SIZE_OPTIONS = [
  {
    text: '300px x 250px',
    value: SIZE.SMALL
  },
  {
    text: '300px x 600px',
    value: SIZE.BIG
  }
];

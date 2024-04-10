import { defaultNS } from './index';
import { en } from './en';

const resources = {
  ns1: en,
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}

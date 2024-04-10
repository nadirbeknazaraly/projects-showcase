import {
  getGenericPassword,
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import { Platform } from 'react-native';

export interface IKeychain {
  set(key: string, value: string): Promise<void>;
  get(): Promise<any>;
  reset(key: string): Promise<void>;
}

function Keychain(): IKeychain {
  return Object.freeze<IKeychain>({
    async set(key: string, value: string): Promise<void> {
      await setGenericPassword(key, value);
    },
    async get(): Promise<any> {
      return await getGenericPassword();
    },
    async reset(key: string): Promise<void> {
      Platform.OS === 'ios'
        ? await setGenericPassword(key, '')
        : await resetGenericPassword();
    },
  });
}

export default Keychain;

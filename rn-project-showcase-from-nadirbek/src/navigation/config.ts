import { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<any> = {
  prefixes: ['appName://'],
  config: {
    screens: {
      MainBottomTab: {
        screens: {
          CartStack: {
            screens: {
              CartScreen: 'cart',
            },
          },
          AccountStack: {
            screens: {
              OrderScreen: 'orders/:id',
            },
          },
          HomeStack: 'notifications',
          CatalogStack: {
            screens: {
              ProductStack: {
                screens: {
                  ProductScreen: 'products/:id',
                },
              },
            },
          },
        },
      },
    },
  },
};

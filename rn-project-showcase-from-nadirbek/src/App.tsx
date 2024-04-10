import 'symbol-observable';
import i18next from 'i18next';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import AppThemeProvider from './themes';
import { persistor, store } from './store';
import * as Sentry from '@sentry/react-native';
import NotificationsStore from 'store/notifications';
import SplashProvider from 'providers/SplashProvider';
import { NotificationsList } from 'components/organisms';
import { useNetInfo } from '@react-native-community/netinfo';
import { PersistGate } from 'redux-persist/integration/react';
import { FirebaseProvider } from 'providers/FirebaseProvider';
import { SmallNotificationVariant } from 'types/common/notification';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NO_INTERNET_CONNECTION = {
  severity: SmallNotificationVariant.ERROR,
  messageKey: i18next.t('httpStatus.noInternetConnection'),
};

const App = () => {
  const netInfo = useNetInfo();

  useEffect(() => {
    if (!netInfo.isConnected) {
      store.dispatch(
        NotificationsStore.actions.addNotification(NO_INTERNET_CONNECTION),
      );
    } else {
      store.dispatch(
        NotificationsStore.actions.removeNotification(NO_INTERNET_CONNECTION),
      );
    }
  }, [netInfo]);

  return (
    <Provider store={store}>
      <FirebaseProvider>
        <PersistGate loading={null} persistor={persistor}>
          <AppThemeProvider>
            <SplashProvider>
              <SafeAreaProvider>
                <NotificationsList />
                <Navigation />
              </SafeAreaProvider>
            </SplashProvider>
          </AppThemeProvider>
        </PersistGate>
      </FirebaseProvider>
    </Provider>
  );
};
export default Sentry.wrap(App);

import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

type RootNavigationParams = {
  [key: string]:
    | {
        [param: string]: any;
      }
    | undefined;
};

export const navigationRef =
  createNavigationContainerRef<RootNavigationParams>();

export function navigate(name: string, params?: RootNavigationParams[string]) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}

export function replace(name: string, params?: RootNavigationParams[string]) {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
}

export function popToTop(name: string) {
  if (navigationRef.isReady()) {
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name }],
    });
  }
}

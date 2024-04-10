import React from 'react';
import AuthStack from './AuthStack';
import { useAuth } from 'hooks/useAuth';
import { linking } from 'navigation/config';
import MainBottomTab from './MainBottomTab';
import { NavigationTheme } from 'themes/index';
import { MenuStack } from 'navigation/MenuStack';
import { MenuMainRouteName } from 'constants/menu';
import { navigationRef } from 'navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator();

export default function () {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={NavigationTheme}
      linking={linking}
    >
      <RootStack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <>
            <RootStack.Screen name="MainBottomTab" component={MainBottomTab} />
            <RootStack.Screen name={MenuMainRouteName} component={MenuStack} />
          </>
        ) : (
          <>
            <RootStack.Screen name="MainBottomTab" component={MainBottomTab} />
            <RootStack.Screen name={MenuMainRouteName} component={MenuStack} />
            <RootStack.Screen name="AuthStack" component={AuthStack} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

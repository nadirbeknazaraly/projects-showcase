import { Icon } from 'components/atoms';
import { makeStyles } from '@rneui/themed';
import CatalogStack from 'navigation/CatalogStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function () {
  const styles = useStyles();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="CatalogStack"
        component={CatalogStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({ color, focused: isFocused }) => (
            <Icon
              size={32}
              color={color}
              name="icon--Property-1=searsh-categories"
              style={[isFocused && styles.iconFocused]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const useStyles = makeStyles(theme => ({
  tabBar: {
    height: 88,
    display: 'flex',
    borderTopWidth: 0,
    paddingHorizontal: 32,
    ...theme.shadows.shadowC,
    shadowColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
  },
  iconFocused: {
    ...theme.shadows.shadowD,
    shadowColor: theme.colors.primary,
  },
  iconContainer: {
    position: 'relative',
  },
  countIconContainer: {
    top: -4,
    right: -4,
    padding: 1,
    minWidth: 16,
    aspectRatio: 1,
    borderRadius: 1000,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  countIcon: {
    color: theme.colors.white,
  },
}));

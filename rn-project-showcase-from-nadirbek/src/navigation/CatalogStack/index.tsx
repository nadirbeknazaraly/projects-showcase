import {
  SearchScreen,
  ResultsScreen,
  SubCategoryScreen,
} from 'screens/CatalogScreens';
import { Header } from 'components/molecules';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryFiltersScreen } from 'screens/CatalogScreens/FiltersScreen/CategoryProductsFilters';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen
        name="FiltersScreen"
        component={CategoryFiltersScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import { View } from 'react-native';
import { RouteParams } from './types';
import { makeStyles } from '@rneui/themed';
import { Container } from 'components/templates';
import { SubCategory } from 'types/DTO/category';
import { useRoute } from '@react-navigation/native';
import { Category, Title } from 'components/molecules';
import { useAppNavigation } from 'hooks/useAppNavigation';

export const SubCategoryScreen = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const route = useRoute();
  const { name, subcategory } = route.params as RouteParams;

  const handleOnPress = (category: SubCategory) => {
    navigation.navigate('ResultsScreen', {
      id: category.id,
      name: category.name,
    });
  };

  return (
    <Container>
      <View style={styles.container}>
        <Title title={name} />
        <View style={styles.content}>
          {subcategory.map(category => (
            <Category
              key={category.id}
              category={category}
              onPress={() => handleOnPress(category)}
            />
          ))}
        </View>
      </View>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    gap: theme.spacing.lg,
  },
  content: {
    gap: theme.spacing.xs,
  },
}));

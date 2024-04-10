import { View } from 'react-native';
import React, { useState } from 'react';
import { Loader } from 'components/atoms';
import { makeStyles } from '@rneui/themed';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { Category as DTOCategory } from 'types/DTO/category';
import { Category, InputSearch } from 'components/molecules';
import { useDebounceCallback } from 'hooks/useDebounceCallback';
import { AvoidSoftInput, Container } from 'components/templates';
import { useCategoriesQuery, useSearchQuery } from 'store/dictionaries/api';

const SearchScreen = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const [debouncedText, setDebouncedText] = useState('');

  const resetText = () => setDebouncedText('');
  const debouncedSetText = useDebounceCallback(setDebouncedText);

  const { data } = useSearchQuery(debouncedText, {
    skip: !debouncedText.length,
  });

  const { data: categories, isSuccess: areCategoriesLoaded } =
    useCategoriesQuery();

  const items = data?.items;

  const handleOnPress = (category: DTOCategory) => {
    if (category.subcategory) {
      navigation.navigate('SubCategoryScreen', {
        name: category.name,
        subcategory: category.subcategory,
      });

      return;
    }

    navigation.navigate('ResultsScreen', {
      id: category.id,
      name: category.name,
    });
  };

  if (!areCategoriesLoaded) return <Loader />;

  return (
    <AvoidSoftInput>
      <Container>
        <View style={styles.container}>
          <InputSearch
            debouncedSetText={debouncedSetText}
            text={debouncedText}
            resetText={resetText}
            items={items}
          />
          {!debouncedText.length && (
            <View style={styles.content}>
              {categories?.map(category => (
                <Category
                  key={category.id}
                  category={category}
                  onPress={() => handleOnPress(category)}
                />
              ))}
            </View>
          )}
        </View>
      </Container>
    </AvoidSoftInput>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    gap: theme.spacing.md,
  },
  content: {
    gap: theme.spacing.xs,
  },
}));

export default SearchScreen;

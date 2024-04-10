import React, { useRef } from 'react';
import { makeStyles } from '@rneui/themed';
import { InputSearchProps } from './types';
import { useTranslation } from 'react-i18next';
import { Search, Types } from 'types/DTO/search';
import { Icon, Input, Text } from 'components/atoms';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { Pressable, TextInput, View } from 'react-native';

const InputSearch = ({
  debouncedSetText,
  text,
  resetText,
  items = [],
}: InputSearchProps) => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const inputRef = useRef<TextInput>(null);
  const { t } = useTranslation();

  const handleOnPressClear = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      inputRef.current.blur();
      resetText();
    }
  };

  const handleOnPress = (item: Search) => {
    if (item.type === Types.CATEGORY) {
      navigation.navigate('ResultsScreen', { id: item.id, name: item.name });
      handleOnPressClear();

      return;
    }

    if (item.type === Types.PRODUCT) {
      navigation.navigate('ProductStack', {
        screen: 'ProductScreen',
        params: { id: item.id },
      });
      handleOnPressClear();

      return;
    }
  };

  return (
    <View style={styles.container}>
      <Input
        ref={inputRef}
        onChangeText={debouncedSetText}
        rightIcon={
          !text ? (
            <Icon size={24} name="icon--Property-1=search-01" />
          ) : (
            <Pressable onPress={handleOnPressClear}>
              <Icon size={24} name="icon--Property-1=x-02" />
            </Pressable>
          )
        }
      />
      {!!text.length && (
        <View style={styles.content}>
          {items?.length === 0 ? (
            <Text variant={'p3'} style={styles.emptyText}>
              {t('other.searchNotFound')}
            </Text>
          ) : (
            items.map(item => (
              <Pressable
                key={item.id}
                style={styles.item}
                onPress={() => handleOnPress(item)}
              >
                <View style={styles.title}>
                  <Text
                    color="grey2"
                    variant="p1"
                    highlightText={text}
                    highlightColor="black"
                  >
                    {item.name}
                  </Text>
                </View>
                <Icon size={24} name="icon--Property-1=arrow-right" />
              </Pressable>
            ))
          )}
        </View>
      )}
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    borderTopLeftRadius: theme.spacing.sm,
    borderTopRightRadius: theme.spacing.sm,
  },
  content: {
    overflow: 'hidden',
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.white,
    borderBottomLeftRadius: theme.spacing.sm * 0.75,
    borderBottomRightRadius: theme.spacing.sm * 0.75,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.sm,
  },
  title: {
    flex: 1,
  },
  emptyText: {
    marginLeft: theme.spacing.sm,
  },
}));

export default InputSearch;

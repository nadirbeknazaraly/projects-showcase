import React from 'react';
import { CategoryProps } from './types';
import { makeStyles } from '@rneui/themed';
import { Pressable, View } from 'react-native';
import { ImageWithSkeleton, Text } from 'components/atoms';

const Category = (props: CategoryProps) => {
  const { category, ...other } = props;
  const styles = useStyles();

  const { name, image } = category;

  return (
    <Pressable style={styles.container} {...other}>
      <View style={styles.imageWrapper}>
        <ImageWithSkeleton
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: image.url,
          }}
        />
      </View>
      <Text variant="p4" style={styles.name}>
        {name}
      </Text>
    </Pressable>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    height: 82,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    ...theme.shadows.shadowF,
    shadowColor: theme.colors.grey1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.sm * 0.75,
  },
  imageWrapper: {
    flex: 0.5,
    height: '100%',
    backgroundColor: theme.colors.grey3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    flex: 0.5,
    textTransform: 'uppercase',
    marginLeft: theme.spacing.sm,
    paddingRight: theme.spacing.md,
  },
}));

export default Category;

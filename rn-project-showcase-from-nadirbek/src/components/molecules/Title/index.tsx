import React from 'react';
import { TitleProps } from './types';
import { makeStyles } from '@rneui/themed';
import { Icon, Text } from 'components/atoms';
import { Pressable, View } from 'react-native';
import { useAppNavigation } from 'hooks/useAppNavigation';

const Title = (props: TitleProps) => {
  const { title, rightPressable } = props;
  const styles = useStyles();
  const navigation = useAppNavigation();

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, props.style]}>
      <Pressable style={styles.content} onPress={handleOnPress}>
        <Icon size={24} name="icon--Property-1=chevron-left" />
        <Text variant="h3-r">{title}</Text>
      </Pressable>
      {rightPressable}
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm * 0.75,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
}));

export default Title;

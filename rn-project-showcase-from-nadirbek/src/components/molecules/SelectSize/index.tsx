import { View } from 'react-native';
import { Sizes } from 'types/common/size';
import { makeStyles } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { SelectSizeProps, VariantType } from './types';
import { RealRadioButton, Text } from 'components/atoms';
import { NO_SIZE_VALUE } from 'constants/defaultSettings';

const SelectSize = (props: SelectSizeProps) => {
  const { title, size = Sizes.Medium, checked, onPress } = props;
  const { t } = useTranslation();
  const styles = useStyles(props);
  const variants: VariantType = {
    [Sizes.Small]: 'p5-b',
    [Sizes.Medium]: 'p5-b',
    [Sizes.Large]: 'p4-b',
  };

  const processedTitle = title === NO_SIZE_VALUE ? t('other.no') : title;
  return (
    <RealRadioButton
      checked={checked}
      checkedIcon={
        <View style={[styles.icon, styles.iconChecked]}>
          <Text variant={variants[size]} color="background">
            {processedTitle}
          </Text>
        </View>
      }
      uncheckedIcon={
        <View style={styles.icon}>
          <Text variant={variants[size]} color="grey1">
            {processedTitle}
          </Text>
        </View>
      }
      onPress={onPress}
    />
  );
};

const useStyles = makeStyles((theme, props: SelectSizeProps) => {
  const { size } = props;
  const isMedium = size === Sizes.Medium;
  const isLarge = size === Sizes.Large;

  return {
    icon: {
      width: theme.spacing.md,
      height: theme.spacing.md,
      borderRadius: theme.spacing.md,
      ...(isMedium && {
        width: theme.spacing.lg,
        height: theme.spacing.lg,
        borderRadius: theme.spacing.lg,
      }),
      ...(isLarge && {
        width: theme.spacing.xl,
        height: theme.spacing.xl,
        borderRadius: theme.spacing.xl,
      }),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.grey3,
    },
    iconChecked: {
      backgroundColor: theme.colors.primary,
    },
  };
});

export default SelectSize;

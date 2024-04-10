import { Sizes } from 'types/common/size';
import { makeStyles } from '@rneui/themed';
import { FilterScreenProps } from './types';
import { toggleArrayValue } from 'utils/array';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import { Container } from 'components/templates';
import { SelectSize, Title } from 'components/molecules';
import { Button, Color, Input, Text } from 'components/atoms';

export const FiltersScreen = ({
  isFetching,
  data,
  filters,
  setters,
  onAccept,
}: FilterScreenProps) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { price_from, price_to, colors, sizes } = filters;
  const { setColors, setPriceFrom, setPriceTo, setSizes, resetFilters } =
    setters;
  const text = `${t('other.show')} ${data?.count_products[0]} ${t(
    'other.items',
  )}`;

  return (
    <Container>
      <Title
        title={t('productCatalog.filters')}
        rightPressable={
          <Pressable onPress={resetFilters}>
            <Text variant={'h3-r'} color={'grey2'}>
              {t('productCatalog.reset')}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.container}>
        <View style={styles.block}>
          <Text variant={'p3'}>{t('other.price')}</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.input}>
              <Input
                keyboardType="number-pad"
                placeholder={t('other.from')}
                value={price_from}
                onChangeText={value => {
                  if (!value.match(/^[0-9]*$/)) return;
                  setPriceFrom(value);
                }}
              />
            </View>
            <View style={styles.input}>
              <Input
                keyboardType="numeric"
                placeholder={t('other.to')}
                value={price_to}
                onChangeText={value => {
                  if (!value.match(/^[0-9]*$/)) return;
                  setPriceTo(value);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.block}>
          <Text variant={'p3'}>{t('other.sizes')}</Text>
          <View style={styles.circlesContainer}>
            {data?.sizes.map(size => (
              <SelectSize
                key={size}
                title={size}
                checked={!!sizes?.some(chosenSize => chosenSize === size)}
                size={Sizes.Medium}
                onPress={() => {
                  setSizes(toggleArrayValue(filters.sizes ?? [], size));
                }}
              />
            ))}
          </View>
        </View>
        <View style={styles.block}>
          <Text variant={'p3'}>{t('productCatalog.colors')}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
            {data?.colors.map((color, index) => (
              <Pressable
                onPress={() => {
                  setColors(toggleArrayValue(filters.colors ?? [], color));
                }}
                key={index}
              >
                <Color
                  color={color}
                  size={Sizes.Medium}
                  checked={!!colors?.some(chosenColor => chosenColor === color)}
                />
              </Pressable>
            ))}
          </View>
        </View>
        <Button onPress={onAccept} loading={isFetching}>
          {text}
        </Button>
      </View>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    gap: theme.spacing.md,
  },
  block: {
    gap: theme.spacing.xs,
  },
  inputsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xs,
  },
  input: {
    flex: 1,
  },
  circlesContainer: {
    gap: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
}));

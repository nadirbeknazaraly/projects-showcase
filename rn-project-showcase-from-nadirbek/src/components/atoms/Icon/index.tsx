import React from 'react';
import { IconProps } from './types';
import { makeStyles } from '@rneui/themed';
import { colorType } from 'types/common/color';
import unicodesMap from 'assets/fonts/unicodesMap.json';
import { createIconSet } from 'react-native-vector-icons';

const _Icon = createIconSet(unicodesMap, 'Icons', 'Icons.ttf');

const Icon = (props: IconProps) => {
  const { name, style, ...other } = props;
  const styles = useStyles(props);

  return <_Icon name={name} style={[styles.icon, style]} {...other} />;
};

const useStyles = makeStyles((theme, props: IconProps) => {
  const { color = 'black' } = props;

  return {
    icon: {
      color: theme.colors[color as colorType]
        ? theme.colors[color as colorType]
        : color,
    },
  };
});

export default Icon;

import React from 'react';
import { TextProps } from './types';
import { makeStyles } from '@rneui/themed';
import { Text as RNText } from 'react-native';

const Text = (props: TextProps) => {
  const { children, style, highlightText, highlightColor, ...other } = props;
  const styles = useStyles(props);

  const __highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${highlightText})`, 'gi'));

    return (
      <RNText style={[styles.text, style]}>
        {parts.map((part, index) => (
          <RNText
            key={index}
            style={[
              styles.text,
              part.toLowerCase() === highlightText?.toLowerCase()
                ? styles.textHighlighted
                : null,
              style,
            ]}
            {...other}
          >
            {part}
          </RNText>
        ))}
      </RNText>
    );
  };

  return (
    <RNText style={[styles.text, style]} {...other}>
      {highlightText && highlightColor
        ? __highlightText(children as string)
        : children}
    </RNText>
  );
};

const useStyles = makeStyles((theme, props: TextProps) => {
  const { variant, color = 'black', highlightColor = 'black' } = props;

  return {
    text: {
      color: theme.colors[color],
      ...theme.typography[variant],
    },
    textHighlighted: {
      color: theme.colors[highlightColor],
    },
  };
});

export default Text;

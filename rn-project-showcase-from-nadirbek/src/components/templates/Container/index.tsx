import { ContainerProps } from './types';
import { ScrollView } from 'react-native';
import { makeStyles } from '@rneui/themed';
import { SafeAreaViewCustom } from 'components/atoms';

const Container = (props: ContainerProps) => {
  const { children, style, contentContainerStyle } = props;
  const styles = useStyles();

  return (
    <SafeAreaViewCustom style={styles.safeAreaView}>
      <ScrollView
        ref={props.scrollViewRef}
        scrollEnabled={props.isScrollEnabled ?? true}
        style={[styles.container, style]}
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}
        {...(props.scrollViewProps ?? {})}
      >
        {children}
      </ScrollView>
    </SafeAreaViewCustom>
  );
};

const useStyles = makeStyles(theme => ({
  safeAreaView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: theme.spacing.md,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: theme.spacing.md,
  },
}));

export default Container;

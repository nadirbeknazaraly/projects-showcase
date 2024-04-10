import { Colors } from '@rneui/themed';
import { shadows } from 'themes/Shadows';
import palette from 'themes/Colors/palette';
import { typography } from 'themes/Typography';
import { ComponentTheme } from '@rneui/themed/dist/config/theme.component';

declare module '@rneui/themed' {
  type ColorsType = Colors & {
    [key in keyof typeof palette]: string;
  };

  type fontWeightType =
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;

  export interface FontProps {
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
    fontWeight: fontWeightType;
  }

  type TypographyType = Colors & {
    [key in keyof typeof typography]: IFont;
  };

  export interface ShadowProps {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
  }

  type ShadowsType = {
    [key in keyof typeof shadows]: IShadow;
  };

  export type ComponentFunctionProps<Components = ComponentTheme> = {
    [Key in keyof Components]?:
      | Components[Key]
      | ((
          props: Components[Key],
          theme: Theme & {
            colors: Colors;
          },
        ) => Components[Key]);
  };

  export interface Theme {
    colors: ColorsType;
    typography: TypographyType;
    shadows: ShadowsType;
    components: ComponentFunctionProps;
  }
}

import 'styled-components';
import { defaultTheme } from '../../../03-dt-money/src/styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}

/* eslint-disable no-undef */
import { setI18nConfig } from '../src/lib/i18n';

setI18nConfig();

jest.mock('react-navigation-stack/lib/commonjs/views/assets/back-icon.png', () => 'back-icon.png');
jest.mock(
  'react-navigation-stack/lib/commonjs/views/assets/back-icon-mask.png',
  () => 'back-icon-mask.png'
);

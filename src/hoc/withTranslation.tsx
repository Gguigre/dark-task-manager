import React, { PureComponent, ComponentType, ReactNode } from 'react';
import { setI18nConfig } from '../lib/i18n';
import { addEventListener, removeEventListener } from 'react-native-localize';

export const withTranslation = (Component: ComponentType): ComponentType => {
  class TranslationListener extends PureComponent {
    // eslint-disable-next-line
    public constructor(props: any) {
      super(props);
      setI18nConfig();
    }

    public componentDidMount(): void {
      addEventListener('change', this.handleLocalizationChange);
    }

    public componentWillUnmount(): void {
      removeEventListener('change', this.handleLocalizationChange);
    }

    private handleLocalizationChange = (): void => {
      setI18nConfig();
      this.forceUpdate();
    };

    public render(): ReactNode {
      return <Component />;
    }
  }

  return TranslationListener;
};

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { compose } from 'recompose';
import { RootNavigator } from './navigation';
import { withTranslation } from './hoc/withTranslation';
import { withRedux } from './hoc/withRedux';

const enhance = compose<{}, {}>(
  withRedux,
  withTranslation,
  createAppContainer
);
const AppContainer = enhance(RootNavigator);

let App = undefined;

class AppComponent extends React.Component {
  public render(): JSX.Element {
    return <AppContainer />;
  }
}

App = AppComponent;

export { App };

import React from 'react';
import { View } from 'react-native';
import TestRenderer from 'react-test-renderer';
import { addEventListener } from 'react-native-localize';
import * as i18nModule from '../../lib/i18n';
import { removeEventListener, simulateLocalizationChange } from 'react-native-localize';
import { withTranslation } from '../withTranslation';

describe('withTranslation', () => {
  it('setup i18n on mount', () => {
    const spy = jest.spyOn(i18nModule, 'setI18nConfig');
    const App = withTranslation(View);
    // We mount an App with translation hoc
    TestRenderer.create(<App />);
    // We expect the i18n setup to have been processed
    expect(spy).toHaveBeenCalled();
  });
  it('listen for localization change', () => {
    const App = withTranslation(View);
    // We mount an App with translation hoc
    const testRenderer = TestRenderer.create(<App />);
    const handleLocalizationChange = testRenderer.root.instance.handleLocalizationChange;
    // We expect that the localization event listener is attached
    expect(addEventListener).toHaveBeenCalledWith('change', handleLocalizationChange);
    // We unmount the app
    testRenderer.update(<View />);
    // We expect that the localization event listener is dettached
    expect(removeEventListener).toHaveBeenCalledWith('change', handleLocalizationChange);
  });
  it('react to localization change', () => {
    const App = withTranslation(View);
    // We mount an App with translation hoc
    const testRenderer = TestRenderer.create(<App />);
    const i18nSpy = jest.spyOn(i18nModule, 'setI18nConfig');
    const forceUpdateSpy = jest.spyOn(testRenderer.root.instance, 'forceUpdate');
    // We simulate a localization change
    simulateLocalizationChange();
    // We expect the i18n setup to have been processed again and the app to have been force re-rendered
    expect(i18nSpy).toHaveBeenCalled();
    expect(forceUpdateSpy).toHaveBeenCalled();
  });
});

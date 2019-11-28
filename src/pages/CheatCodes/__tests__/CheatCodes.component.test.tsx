import React from 'react';
import { render, act } from 'react-native-testing-library';
import { CheatCodes } from '../CheatCodes.component';
import { env } from '../../../environment';

jest.mock('../../../environment', () => ({
  env: {
    featureFlags: {
      isCodePushEnabled: true,
    },
  },
}));

describe('CheatCodes component', () => {
  const navigation = {
    reset: jest.fn(),
  } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

  it('should have a button to go to the Login', async () => {
    const cheatCodes = render(<CheatCodes navigation={navigation} />);
    expect(cheatCodes).toMatchSnapshot();
  });

  it('should have a button to go to the Login', async () => {
    const cheatCodes = render(<CheatCodes navigation={navigation} />);

    cheatCodes.getByText('Check update');
    const Picker = cheatCodes.getByTestId('changeLanguagePicker');
    act(() => {
      Picker.props.onValueChange('EN');
    });

    expect(navigation.reset).toHaveBeenCalled();
  });

  it('should have a button to go to the Login', async () => {
    env.featureFlags.isCodePushEnabled = false;
    const cheatCodes = render(<CheatCodes navigation={navigation} />);
    expect(() => cheatCodes.getByText('Check update')).toThrowError();
  });
});

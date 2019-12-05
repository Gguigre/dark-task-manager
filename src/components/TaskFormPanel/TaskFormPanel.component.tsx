import React from 'react';
import {
  EmitterSubscription,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Task } from '../../redux/Tasks/reducer';
import { theme } from '../../theme';
import { Section } from '../Section';

const styles = StyleSheet.create({
  slidingPanelContainer: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.spacings.medium,
    borderTopRightRadius: theme.spacings.medium,
    paddingVertical: theme.spacings.medium,
    paddingHorizontal: theme.spacings.large,
  },
  draggingCTA: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
    alignSelf: 'center',
  },
  form: {
    marginTop: theme.spacings.large,
  },
  input: {
    color: theme.colors.white,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  chevron: {
    color: theme.colors.accent,
    fontSize: 16,
    fontWeight: '600',
  },
});

type TaskFormPanelState = {
  task: Partial<Task> | undefined;
  keyboardHeight: number;
};

type TaskFormPanelProps = {
  task: Partial<Task> | undefined;
};

export class TaskFormPanel extends React.Component<TaskFormPanelProps, TaskFormPanelState> {
  keyboardDidShowListener: EmitterSubscription | null = null;
  keyboardDidHideListener: EmitterSubscription | null = null;
  constructor(props: TaskFormPanelProps) {
    super(props);
    this.state = { ...props, keyboardHeight: 0 };
  }

  public getContent() {
    return this.state.task;
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', e => {
      this.setKeyboardHeight(e.endCoordinates.height);
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
      this.setKeyboardHeight(0);
    });
  }

  componentDidUpdate(prevProps: TaskFormPanelProps) {
    const { task } = this.props;
    if (task !== prevProps.task) {
      this.setState({
        task,
      });
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener && this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener && this.keyboardDidHideListener.remove();
  }

  setTitle = (title: string) => {
    this.setState(formerState => ({ task: { ...formerState.task, title } }));
  };
  setKeyboardHeight = (keyboardHeight: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ keyboardHeight });
  };

  render() {
    const { task, keyboardHeight } = this.state;

    return (
      <View style={styles.slidingPanelContainer}>
        <View style={styles.draggingCTA} />
        <View style={[styles.form, { paddingBottom: keyboardHeight }]}>
          <Section title="Title">
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={task ? task.title : ''}
                onChangeText={this.setTitle}
              />
              <Text style={styles.chevron}>&gt;</Text>
            </View>
          </Section>
          <Section title="Tags"></Section>
        </View>
      </View>
    );
  }
}

import { connect } from 'react-redux';
import { currentTaskSelector } from '../../redux/Tasks/selector';
import { RootState } from '../../redux/reducers';

const mapStateToProps = (state: RootState) => ({
  currentTask: currentTaskSelector(state),
});

export const CurrentTaskCardContainer = connect(mapStateToProps, null);

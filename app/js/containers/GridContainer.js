import { connect } from 'react-redux';
import { press } from '../actions';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  gridState: state.main,
});

const mapDispatchToProps = dispatch => ({
  onPress: data => dispatch(press(data)),
});

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;

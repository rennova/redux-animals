import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import AnimalsPage from './AnimalsPage';
import { getSingleAnimal, tryGetList } from './actions'
import { makeSelectList, makeSelectCurrent } from './selectors'

const mapDispatchToProps = (dispatch) => ({
  getSingleAnimal: (evt) => dispatch(getSingleAnimal(evt)),
  tryGetList: (evt) => dispatch(tryGetList(evt))
});

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  current: makeSelectCurrent()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'animals', reducer });

export default compose(withReducer, withConnect)(AnimalsPage);
export { mapDispatchToProps };

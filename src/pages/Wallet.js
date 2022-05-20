import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestingCurrenciesRates } from '../actions/index';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await requestingCurrenciesRates(dispatch);
  }

  render() {
    return (
      <div>
        <Header />
        <Expenses />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);

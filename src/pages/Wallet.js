import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const currencies = Object.keys(result)
      .filter((currency) => currency !== 'USDT');
    await dispatch(fetchCurrencies(currencies));
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

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  updatingExpenses() {
    const { expenses } = this.props;
    let updatedExpenses = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      const conversionRate = exchangeRates[currency].ask;
      updatedExpenses += Number(value) * conversionRate;
    });
    return updatedExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h5 data-testid="email-field">
          { email }
        </h5>
        <p data-testid="total-field">
          { this.updatingExpenses() || 0 }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

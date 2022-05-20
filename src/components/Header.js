import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <div>
        <h5 data-testid="email-field">
          { email }
        </h5>
        <p data-testid="total-field">
          { total || 0 }
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
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.totalExpenses,
});

export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value-input">
          Valor
          <input
            type="text"
            id="value-input"
            placeholder="R$ 100"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            placeholder="Despesas com roupas de frio"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currencies-select">
          Moeda
          <select id="currencies-select">
            {currencies.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                { currency }
              </option>
            ))}
          </select>
        </label>
        <select data-testid="method-input">
          <option value="Dinheiro">
            Dinheiro
          </option>
          <option value="Cartão de crédito">
            Cartão de crédito
          </option>
          <option value="Cartão de débito">
            Cartão de débito
          </option>
        </select>
        <select data-testid="tag-input">
          <option value="Alimentação">
            Alimentação
          </option>
          <option value="Lazer">
            Lazer
          </option>
          <option value="Trabalho">
            Trabalho
          </option>
          <option value="Transporte">
            Transporte
          </option>
          <option value="Saúde">
            Saúde
          </option>
        </select>
      </div>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Expenses);

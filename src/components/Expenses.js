import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addExpenses,
  requestingCurrenciesRates,
} from '../actions/index';

const defaultTag = 'Alimentação';
const defaultMethod = 'Dinheiro';
const defaultCurrency = 'USD';

class Expenses extends Component {
  state = {
    value: '',
    description: '',
    currency: defaultCurrency,
    method: defaultMethod,
    tag: defaultTag,
  }

  async settingExpenses() {
    const { dispatch } = this.props;
    await requestingCurrenciesRates(dispatch);
    const { value, description, currency, method, tag } = this.state;
    const { exchangeRates, expenses } = this.props;
    const currentExpenses = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    await dispatch(addExpenses(currentExpenses));
    this.setState({
      value: '',
      description: '',
      currency: defaultCurrency,
      method: defaultMethod,
      tag: defaultTag,
    });
  }

  capturingInput({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          Valor
          <input
            type="text"
            id="value-input"
            name="value"
            value={ value }
            placeholder="100"
            data-testid="value-input"
            onChange={ (e) => this.capturingInput(e) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            name="description"
            placeholder="Despesas com roupas de frio"
            data-testid="description-input"
            value={ description }
            onChange={ (e) => this.capturingInput(e) }
          />
        </label>
        <label htmlFor="currencies-select">
          Moeda
          <select
            id="currencies-select"
            name="currency"
            value={ currency }
            onChange={ (e) => this.capturingInput(e) }
          >
            {currencies.map((currentCurrency) => (
              <option
                key={ currentCurrency }
                value={ currentCurrency }
              >
                { currentCurrency }
              </option>
            ))}
          </select>
        </label>
        <select
          data-testid="method-input"
          name="method"
          onChange={ (e) => this.capturingInput(e) }
          value={ method }
        >
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
        <select
          data-testid="tag-input"
          name="tag"
          onChange={ (e) => this.capturingInput(e) }
          value={ tag }
        >
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
        <button
          type="button"
          onClick={ () => this.settingExpenses() }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  exchangeRates: PropTypes.shape({}).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.rates,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expenses);

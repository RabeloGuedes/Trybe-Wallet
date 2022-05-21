import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../actions/index';

export class ExpensesTable extends Component {
  async deleteExpense({ target: { id } }) {
    const { expenses, dispatch } = this.props;
    const expensesToBeRemoved = expenses[id];
    if (expenses.length === 1) {
      await dispatch(removeExpenses([]));
    } else {
      const newExpensesList = expenses
        .filter((expense) => (expense !== expensesToBeRemoved));
      await dispatch(removeExpenses(newExpensesList));
    }
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Descrição
              </th>
              <th>
                Tag
              </th>
              <th>
                Método de pagamento
              </th>
              <th>
                Valor
              </th>
              <th>
                Moeda
              </th>
              <th>
                Câmbio utilizado
              </th>
              <th>
                Valor convertido
              </th>
              <th>
                Moeda de conversão
              </th>
              <th>
                Editar/Excluir
              </th>
            </tr>
          </thead>
          <tbody>
            { expenses
            && (
              expenses
                .map(
                  (
                    {
                      id,
                      value,
                      description,
                      currency,
                      method,
                      tag,
                      exchangeRates,
                    },
                  ) => (
                    <tr key={ id }>
                      <td>
                        { description }
                      </td>
                      <td>
                        { tag }
                      </td>
                      <td>
                        {method}
                      </td>
                      <td>
                        {(Math.ceil(value * 100) / 100).toFixed(2)}
                      </td>
                      <td>
                        { exchangeRates[currency].name }
                      </td>
                      <td>
                        { Math.round(exchangeRates[currency].ask * 100) / 100 }
                      </td>
                      <td>
                        { Math.ceil(value * exchangeRates[currency].ask * 100) / 100 }
                      </td>
                      <td>
                        Real
                      </td>
                      <td>
                        <button
                          type="button"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          data-testid="delete-btn"
                          id={ id }
                          onClick={ (e) => this.deleteExpense(e) }
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ),
                )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

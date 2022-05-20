import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tbody>
            {
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
                      <th>
                        Descrição
                      </th>
                      <td>
                        { description }
                      </td>
                      <th>
                        Tag
                      </th>
                      <td>
                        { tag }
                      </td>
                      <th>
                        Método de pagamento
                      </th>
                      <td>
                        {method}
                      </td>
                      <th>
                        Valor
                      </th>
                      <td>
                        {(Math.ceil(value * 100) / 100).toFixed(2)}
                      </td>
                      <th>
                        Moeda
                      </th>
                      <td>
                        { exchangeRates[currency].name }
                      </td>
                      <th>
                        Câmbio utilizado
                      </th>
                      <td>
                        { Math.round(exchangeRates[currency].ask * 100) / 100 }
                      </td>
                      <th>
                        Valor convertido
                      </th>
                      <td>
                        { Math.ceil(value * exchangeRates[currency].ask * 100) / 100 }
                      </td>
                      <th>
                        Moeda de conversão
                      </th>
                      <td>
                        Real
                      </td>
                      <th>
                        Editar/Excluir
                      </th>
                    </tr>
                  ),
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

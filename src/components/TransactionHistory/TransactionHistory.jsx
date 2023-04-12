import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TableContainer, TableHeaderTitles } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer className="transaction-history">
      <thead>
        <tr>
          <TableHeaderTitles>Type</TableHeaderTitles>
          <TableHeaderTitles>Amount</TableHeaderTitles>
          <TableHeaderTitles>Currency</TableHeaderTitles>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

import PropTypes from 'prop-types';
import { RowTable, Cell } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <RowTable>
      <Cell>{type.charAt(0).toUpperCase() + type.slice(1)}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </RowTable>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

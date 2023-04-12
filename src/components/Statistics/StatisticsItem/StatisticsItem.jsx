import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatPercentage } from './StatisticsItem.styled';
import { getRandomHexColor } from 'utils/randomHexColor';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem style={{ backgroundColor: getRandomHexColor() }}>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { StatContainer, StatTitle, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title.toUpperCase()}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

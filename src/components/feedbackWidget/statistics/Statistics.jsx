import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from './notification/Notification';
import StatisticsData from './statisticsData/StatisticsData';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={styles['statistics-title']}>Statistics</h2>

      {total > 0 ? (
        <StatisticsData
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;

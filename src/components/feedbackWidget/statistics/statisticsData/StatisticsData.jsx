import PropTypes from 'prop-types';
import styles from './StatisticsData.module.css';

const StatisticsData = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles['statistics-data']}>
      <p>
        Good<span>{good}</span>
      </p>
      <p>
        Neutral<span>{neutral}</span>
      </p>
      <p>
        Bad<span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage}</span>
      </p>
    </div>
  );
};

StatisticsData.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default StatisticsData;

import { useState } from 'react';

import Section from './section/section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';

const FeedbackWidget = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const countTotalFeedback = () => goodFeedback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    const percentage = ((goodFeedback / countTotalFeedback()) * 100).toFixed(0);
    return percentage === 'NaN' ? '' : `${percentage}%`;
  };

  const handleFeedback = ({ target }) => {
    target.textContent === 'Good' && setGoodFeedback(goodFeedback + 1);
    target.textContent === 'Neutral' && setNeutralFeedback(neutralFeedback + 1);
    target.textContent === 'Bad' && setBadFeedback(badFeedback + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />

        <Statistics
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default FeedbackWidget;

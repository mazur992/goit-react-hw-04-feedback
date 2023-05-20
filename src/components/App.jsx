import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import css from './App.module.css';
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const incrementReviews = event => {
    const { textContent } = event.currentTarget;
    let name = textContent.toLowerCase();

    countTotalFeedback();

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    setTotal(total + 1);
  };
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / total) * 100);

  return (
    <div className={css.feedback}>
      <div>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={incrementReviews}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
        {total === 0 && (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    </div>
  );
}

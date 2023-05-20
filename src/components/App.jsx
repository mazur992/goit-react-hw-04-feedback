import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  incrementReviews = event => {
    const { textContent } = event.currentTarget;
    let name = textContent.toLowerCase();

    this.countTotalFeedback();

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    this.total += 1;
  };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.total) * 100);

  render() {
    return (
      <div className={css.feedback}>
        <div>
          <Section title="Please leave feedback"></Section>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.incrementReviews}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
          {this.total === 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      </div>
    );
  }
}

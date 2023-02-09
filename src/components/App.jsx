import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Message from './Notification/Notification';

import { useState } from 'react';

export const App = () => {
  const [statistic, setStatistic] = useState({ good: 0, neutral: 0, bad: 0 });

  const buttons = Object.keys(statistic);

  const handleClick = txt => {
    setStatistic(prevState => ({ ...prevState, [txt]: prevState[txt] + 1 }));
  };

  const countTotalFeedback = Object.values(statistic).reduce(
    (acc, value) => acc + value,
    0
  );

  const positivePercentage = Math.floor(
    (statistic.good * 100) / countTotalFeedback
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback ? (
          <Statistics
            good={statistic.good}
            neutral={statistic.neutral}
            bad={statistic.bad}
            countTotalFeedback={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Message message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

/*
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = txt => {
    this.setState(prevState => ({ [txt]: prevState[txt] + 1 }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }
  positivePercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const buttons = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Message message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
*/

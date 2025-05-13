'use client';

import { AnswerButton } from './AnswerButton';
import styles from './QuestionSection.module.css';

interface Option {
  id: string;
  text: string;
}

interface Props {
  question: string;
  options: Option[];
}

export function QuestionSection({ question, options }: Props) {
  const handleAnswer = (id: string) => {
    console.log(`Selected answer ID: ${id}`);
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.question}>{question}</h1>
      <div className={styles.options}>
        {options.map(({ id, text }) => (
          <AnswerButton key={id} id={id} text={text} onClick={handleAnswer} />
        ))}
      </div>
    </div>
  );
}
export default QuestionSection;

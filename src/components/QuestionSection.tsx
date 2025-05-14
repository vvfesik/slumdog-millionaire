'use client';

import { AnswerButton } from '@/components/AnswerButton';
import styles from '@/components/QuestionSection.module.css';

interface Option {
  id: string;
  text: string;
}

const defaultOptions: Option[] = [
  { id: 'a', text: '' },
  { id: 'b', text: '' },
  { id: 'c', text: '' },
  { id: 'd', text: '' },
];

interface Props {
  question?: string;
  options?: Option[];
  requiredCount?: number;
  onAnswer: (id: string) => void;
  correct: string[];
  incorrect: string[];
  selected: string[];
}

export function QuestionSection({
  question = '',
  options = defaultOptions,
  requiredCount = 1,
  onAnswer,
  correct,
  incorrect,
  selected,
}: Props) {
  const getAnswerState = (id: string) => {
    if (correct.includes(id)) return 'correct';
    if (incorrect.includes(id)) return 'incorrect';
    if (selected.includes(id)) return 'selected';
    return 'idle';
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.question}>{question}</h1>
      <div className={styles.container}>
        {requiredCount > 1 && (
          <p className={styles.info}>{`Select ${requiredCount} options`}</p>
        )}
        <div className={styles.options}>
          {options.map(({ id, text }) => (
            <AnswerButton
              key={id}
              id={id}
              text={text}
              onClick={onAnswer}
              state={getAnswerState(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default QuestionSection;

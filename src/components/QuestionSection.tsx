'use client';

import { AnswerButton } from '@/components/AnswerButton';
import { Option } from '@/lib/definitions';
import styles from '@/components/QuestionSection.module.css';

const defaultOptions: Option[] = [
  { id: 'a', text: undefined! },
  { id: 'b', text: undefined! },
  { id: 'c', text: undefined! },
  { id: 'd', text: undefined! },
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
  question,
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
      {question ? (
        <h1 className={styles.question}>{question}</h1>
      ) : (
        <div className={`animate-pulse ${styles.placeholder}`} />
      )}
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

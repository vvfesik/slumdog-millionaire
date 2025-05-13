import styles from './AnswerButton.module.css';

const colors = {
  fill: {
    idle: 'var(--background)',
    selected: 'var(--color-primary-bg)',
    correct: 'var(--color-success-bg)',
    incorrect: 'var(--color-error-bg)',
  },
  stroke: {
    idle: 'var(--color-border)',
    selected: 'var(--color-primary)',
    correct: 'var(--color-success)',
    incorrect: 'var(--color-error)',
  },
};

interface Props {
  id: string;
  text: string;
  state?: 'idle' | 'selected' | 'correct' | 'incorrect';
  onClick: (id: string) => void;
}

export function AnswerButton({
  id, text, state = 'idle', onClick,
}: Props) {
  return (
    <button type="button" onClick={() => onClick(id)} className={styles.button}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 405 72">
        <path stroke={colors.stroke[state]} d="M388 36h17M0 36h17" />
        <path fill={colors.fill[state]} stroke={colors.stroke[state]} d="M48 .5h309c3.5 0 6.9 1.7 9 4.5l.3.3 22 30.7-22 30.7c-2.2 3-5.7 4.8-9.4 4.8H48.1c-3.6 0-7-1.7-9.2-4.5l-.2-.3-22-30.7 22-30.7C41 2.3 44.4.5 48.1.5Z" />
      </svg>
      <span className={styles.text}>
        <strong>{id}</strong>
        {text}
      </span>
    </button>
  );
}
export default AnswerButton;

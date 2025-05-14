import styles from '@/components/Step.module.css';

const colors = {
  idle: 'var(--color-border)',
  active: 'var(--color-primary)',
  completed: 'var(--color-border)',
};

interface Props {
  children: React.ReactNode;
  state?: 'idle' | 'active' | 'completed';
  as?: 'li' | 'div';
}

export function Step({ children, state = 'idle', as = 'li' }: Props) {
  const Element = as;
  const classNames = [styles.step, state !== 'idle' && styles[state]].filter(Boolean).join(' ');

  return (
    <Element className={classNames}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 376 40">
        <path stroke={colors[state]} d="M69 20H0M376 20h-69" />
        <path fill="#fff" stroke={colors[state]} d="M90.3.5h195.4c3.3 0 6.5 1.4 8.6 3.9l.2.2L307.3 20l-12.8 15.4a11.5 11.5 0 0 1-8.8 4.1H90.3c-3.3 0-6.5-1.4-8.6-3.9l-.2-.2L68.7 20 81.5 4.6C83.6 2 86.9.5 90.3.5Z" />
      </svg>
      <span className={styles.reward}>{children}</span>
    </Element>
  );
}
export default Step;

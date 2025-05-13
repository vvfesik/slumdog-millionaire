import styles from './RewardLadder.module.css';
import { Step } from './Step';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

function getStepState(index: number, currentStepIndex: number) {
  if (index < currentStepIndex) {
    return 'completed';
  }
  if (index === currentStepIndex) {
    return 'active';
  }
  return 'idle';
}

interface Props {
  currentStepIndex: number;
  steps: number[];
}

export function RewardLadder({ currentStepIndex = 1, steps = [500, 1000, 2000, 1000000] }: Props) {
  return (
    <div className={styles.section}>
      <ul className={styles.ladder}>
        {steps.map((value, index) => (
          <Step key={value} as="li" state={getStepState(index, currentStepIndex)}>{formatter.format(value)}</Step>
        )).reverse()}
      </ul>
    </div>
  );
}
export default RewardLadder;

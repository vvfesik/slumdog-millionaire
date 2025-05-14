import { numberToUSD } from '@/lib/utils';
import { Step } from '@/components/Step';
import styles from '@/components/RewardLadder.module.css';

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

export function RewardLadder({ currentStepIndex = 0, steps = [] }: Props) {
  return (
    <div className={styles.section}>
      <ul className={styles.ladder}>
        {steps.map((value, index) => (
          <Step key={value} as="li" state={getStepState(index, currentStepIndex)}>{numberToUSD(value)}</Step>
        )).reverse()}
      </ul>
    </div>
  );
}
export default RewardLadder;

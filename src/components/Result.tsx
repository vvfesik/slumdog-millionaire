'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/store/gameStore';
import { Grid, GridColumn } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Headline } from '@/components/ui/Headline';
import { numberToUSD } from '@/lib/utils';
import styles from '@/components/Result.module.css';

export function Result() {
  const router = useRouter();
  const reset = useGameStore((s) => s.reset);
  const storeReward = useGameStore((s) => s.reward);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reward = useMemo(() => storeReward, []);

  const restartTheGame = () => {
    reset();
    router.push('/game');
  };

  return (
    <div className={`page ${styles.page}`}>
      <Grid smCols={2} alignItems="center">
        <GridColumn className={styles.columnImage}>
          <img
            src="/hand.svg"
            alt="Hand illustration"
            className={styles.image}
          />
        </GridColumn>
        <GridColumn className={styles.columnContent}>
          <Grid smCols={2} isNestedGrid className="row-gap-xxlarge">
            <GridColumn span={2}>
              <p className={styles.text}>Total score:</p>
              <Headline>{`${numberToUSD(reward)} earned`}</Headline>
            </GridColumn>
            <GridColumn className={styles.columnPlay}>
              <Button className="full-width" onClick={restartTheGame}>Try again</Button>
            </GridColumn>
          </Grid>
        </GridColumn>
      </Grid>
    </div>
  );
}
export default Result;

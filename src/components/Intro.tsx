'use client';

import { useRouter } from 'next/navigation';
import { useGameStore } from '@/store/gameStore';
import { Grid, GridColumn } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Headline } from '@/components/ui/Headline';
import styles from '@/components/Intro.module.css';

export function Intro() {
  const router = useRouter();
  const reset = useGameStore((s) => s.reset);

  const startTheGame = () => {
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
              <Headline>Who wants to be a&nbsp;millionaire?</Headline>
            </GridColumn>
            <GridColumn className={styles.columnPlay}>
              <Button className="full-width" onClick={startTheGame}>Play</Button>
            </GridColumn>
          </Grid>
        </GridColumn>
      </Grid>
    </div>
  );
}
export default Intro;

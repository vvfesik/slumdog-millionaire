import { Grid, GridColumn } from '@/components/ui/Grid';
import { Button } from '@/components/ui/Button';
import { Headline } from '@/components/ui/Headline';
import Link from 'next/link';
import styles from './Intro.module.css';

export function Intro() {
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
              <Link href="/game">
                <Button className="full-width">Play</Button>
              </Link>
            </GridColumn>
          </Grid>
        </GridColumn>
      </Grid>
    </div>
  );
}
export default Intro;

import { QuestionSection } from '@/components/QuestionSection';
import { RewardLadder } from '@/components/RewardLadder';
import { Grid, GridColumn } from '@/components/ui/Grid';
import { questions } from '@/lib/config.json';

const baseStyles = {
  backgroundColor: 'var(--color-bg-light)',
  minHeight: '100svh',
};

export default function GamePage() {
  return (
    <div style={baseStyles}>
      <Grid smCols={4}>
        <GridColumn span={3}>
          <QuestionSection question={questions[0].text} options={questions[0].options} />
        </GridColumn>
        <GridColumn>
          <RewardLadder />
        </GridColumn>
      </Grid>
    </div>
  );
}

import { Game } from '@/components/Game';
import { getRewards } from '@/lib/actions';

const baseStyles = {
  backgroundColor: 'var(--color-bg-light)',
  minHeight: '100svh',
};

export default async function GamePage() {
  const steps = await getRewards();

  return (
    <div style={baseStyles}>
      <Game steps={steps} />
    </div>
  );
}

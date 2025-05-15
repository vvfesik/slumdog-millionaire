import { Game } from '@/components/Game';
import { getInitialGameData } from '@/lib/actions';

const baseStyles = {
  backgroundColor: 'var(--color-bg-light)',
  minHeight: '100svh',
};

export default async function GamePage() {
  const { question, rewards } = await getInitialGameData();

  return (
    <div style={baseStyles}>
      <Game steps={rewards} firstQuestion={question} />
    </div>
  );
}

'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { QuestionSection } from '@/components/QuestionSection';
import { RewardLadder } from '@/components/RewardLadder';
import { Grid, GridColumn } from '@/components/ui/Grid';
import { CloseIcon } from '@/components/ui/CloseIcon';
import { MenuIcon } from '@/components/ui/MenuIcon';
import { submitAnswer } from '@/lib/actions';
import { useGameStore } from '@/store/gameStore';
import { Question } from '@/lib/definitions';
import styles from '@/components/Game.module.css';

interface Props {
  steps: number[];
  firstQuestion: Question;
}

export function Game({ steps = [], firstQuestion }: Props) {
  const [isRewardsMenuVisible, setRewardsMenuVisible] = useState(false);
  const currentIndex = useGameStore((s) => s.currentIndex);
  const isFinished = useGameStore((s) => s.isFinished);
  const next = useGameStore((s) => s.next);
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(firstQuestion);
  const [selected, setSelected] = useState<string[]>([]);
  const [{ correct, incorrect }, setResults] = useState<{
    correct: string[];
    incorrect: string[];
  }>({ correct: [], incorrect: [] });
  const [isSubmitting, startTransition] = useTransition();

  useEffect(() => {
    if (isFinished) {
      router.push('/result');
    }
  }, [isFinished, router]);

  const handleAnswer = (id: string) => {
    if (!question || isSubmitting) return;

    if (question.requiredCount === 1 || selected.length === question.requiredCount - 1) {
      startTransition(async () => {
        const {
          isCorrect,
          correctAnswers,
          incorrectAnswers,
          reward: newReward,
          nextQuestion,
        } = await submitAnswer(currentIndex, [...selected, id]);
        setResults({ correct: correctAnswers, incorrect: incorrectAnswers });
        setSelected([]);
        await new Promise((resolve) => { setTimeout(resolve, 500); });
        setResults({ correct: [], incorrect: [] });
        if (isCorrect) {
          setQuestion((prev) => nextQuestion ?? prev);
          next(newReward, !nextQuestion);
        } else {
          router.push('/result');
        }
      });
    } else {
      setSelected((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...prev, id];
      });
    }
  };

  return (
    <>
      <Grid smCols={4}>
        <GridColumn span={3}>
          <QuestionSection
            question={question?.text}
            options={question?.options}
            requiredCount={question?.requiredCount}
            onAnswer={handleAnswer}
            correct={correct}
            incorrect={incorrect}
            selected={selected}
          />
        </GridColumn>
        <GridColumn className={`${styles.rewards} ${isRewardsMenuVisible ? styles.visible : styles.hidden}`}>
          <RewardLadder currentStepIndex={currentIndex} steps={steps} />
        </GridColumn>
      </Grid>
      <button type="button" className={styles.rewardsMenuButton} onClick={() => setRewardsMenuVisible((prev) => !prev)}>
        {isRewardsMenuVisible ? (
          <CloseIcon />
        ) : (
          <MenuIcon />
        )}

      </button>
    </>
  );
}
export default Game;

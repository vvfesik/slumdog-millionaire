'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { QuestionSection } from '@/components/QuestionSection';
import { RewardLadder } from '@/components/RewardLadder';
import { Grid, GridColumn } from '@/components/ui/Grid';
import { getQuestion, submitAnswer } from '@/lib/actions';
import { useGameStore } from '@/store/gameStore';
import { Question } from '@/lib/definitions';

interface Props {
  steps: number[];
}

export function Game({ steps = [] }: Props) {
  const currentIndex = useGameStore((s) => s.currentIndex);
  const isFinished = useGameStore((s) => s.isFinished);
  const next = useGameStore((s) => s.next);
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [{ correct, incorrect }, setResults] = useState<{
    correct: string[];
    incorrect: string[];
  }>({ correct: [], incorrect: [] });
  const [, startTransition] = useTransition();

  useEffect(() => {
    getQuestion(currentIndex).then(setQuestion).catch(() => setQuestion(null));
  }, [currentIndex]);

  useEffect(() => {
    if (isFinished) {
      router.push('/result');
    }
  }, [isFinished, router]);

  const handleAnswer = (id: string) => {
    if (!question) return;

    if (question.requiredCount === 1 || selected.length === question.requiredCount - 1) {
      startTransition(async () => {
        const {
          isCorrect,
          isFinished: newIsFinished,
          correctAnswers,
          incorrectAnswers,
          reward: newReward,
        } = await submitAnswer(currentIndex, [...selected, id]);
        setResults({ correct: correctAnswers, incorrect: incorrectAnswers });
        setSelected([]);
        await new Promise((resolve) => { setTimeout(resolve, 500); });
        setResults({ correct: [], incorrect: [] });
        if (isCorrect || newIsFinished) {
          next(newReward, newIsFinished);
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
      <GridColumn>
        <RewardLadder currentStepIndex={currentIndex} steps={steps} />
      </GridColumn>
    </Grid>
  );
}
export default Game;

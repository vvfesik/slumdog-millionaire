'use server';

import config from '@/lib/config.json';

export async function getRewards(): Promise<number[]> {
  return config.questions.map((question) => question.reward);
}

export async function getQuestion(index: number): Promise<{
  text: string;
  options: { id: string; text: string }[];
  reward: number;
  requiredCount: number;
}> {
  const question = config.questions[index];
  if (!question) throw new Error('Question not found');

  const { correctAnswers, ...safeToExpose } = question;
  const requiredCount = question.correctAnswers.length;
  return { ...safeToExpose, requiredCount };
}

export async function submitAnswer(
  index: number,
  answerIDs: string[],
): Promise<{
    isCorrect: boolean;
    isFinished: boolean;
    correctAnswers: string[];
    incorrectAnswers: string[];
    reward: number;
  }> {
  const question = config.questions[index];

  if (!question) throw new Error('Question not found');

  const correctSet = new Set(question.correctAnswers);
  const answerSet = new Set(answerIDs);

  const isCorrect = correctSet.size === answerSet.size
    && [...correctSet].every((val) => answerSet.has(val));

  const incorrectAnswers = [...answerSet].filter((id) => !correctSet.has(id));
  const correctAnswers = [...correctSet];

  const isFinished = index === config.questions.length - 1;

  return {
    isCorrect, isFinished, correctAnswers, incorrectAnswers, reward: question.reward,
  };
}

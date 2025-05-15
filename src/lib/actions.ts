'use server';

import config from '@/lib/config.json';
import { AnswerResult, Question } from '@/lib/definitions';

export async function getInitialGameData(): Promise<{ question: Question; rewards: number[] }> {
  const rewards = config.questions.map((question) => question.reward);

  const { correctAnswers, ...safeToExpose } = config.questions[0];
  const requiredCount = correctAnswers.length;

  return { question: { ...safeToExpose, requiredCount }, rewards };
}

export async function getQuestion(index: number): Promise<Question> {
  const question = config.questions[index];
  if (!question) throw new Error('Question not found');

  const { correctAnswers, ...safeToExpose } = question;
  const requiredCount = question.correctAnswers.length;
  return { ...safeToExpose, requiredCount };
}

export async function submitAnswer(index: number, answerIDs: string[]): Promise<AnswerResult> {
  const question = config.questions[index];

  if (!question) throw new Error('Question not found');

  const correctSet = new Set(question.correctAnswers);
  const answerSet = new Set(answerIDs);

  const isCorrect = correctSet.size === answerSet.size
    && [...correctSet].every((val) => answerSet.has(val));

  const incorrectAnswers = [...answerSet].filter((id) => !correctSet.has(id));
  const correctAnswers = [...correctSet];

  const nextQuestion = index === config.questions.length - 1 ? null : await getQuestion(index + 1);

  return {
    isCorrect, correctAnswers, incorrectAnswers, reward: question.reward, nextQuestion,
  };
}

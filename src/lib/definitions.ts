export type GapSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export type AlignItems = 'start' | 'center' | 'end' | 'stretch';
export type AnswerState = 'idle' | 'selected' | 'correct' | 'incorrect';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  text: string;
  options: Option[];
  requiredCount: number;
  reward: number;
}

export interface AnswerResult {
  isCorrect: boolean;
  isFinished: boolean;
  correctAnswers: string[];
  incorrectAnswers: string[];
  reward: number;
}

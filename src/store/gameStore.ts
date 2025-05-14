import { create } from 'zustand';

interface GameState {
  currentIndex: number;
  reward: number;
  isFinished: boolean;
  next: (reward: number, isFinished?: boolean) => void;
  reset: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentIndex: 0,
  reward: 0,
  isFinished: false,
  next: (reward, isFinished = false) => set((s) => ({
    reward,
    isFinished,
    ...(!isFinished ? { currentIndex: s.currentIndex + 1 } : {}),
  })),
  reset: () => set({
    currentIndex: 0,
    reward: 0,
    isFinished: false,
  }),
}));

export default useGameStore;

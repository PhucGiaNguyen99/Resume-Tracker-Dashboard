import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  jobs: [],
  setUser: (user) => set({ user }),
  setJobs: (jobs) => set({ jobs }),
}));

export default useStore;


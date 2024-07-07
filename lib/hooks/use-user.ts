import { create } from 'zustand';
import { AppStatus } from '@/lib/enums';

interface UserStore {
  userData: any;
  status: AppStatus;
  isLoggedIn: boolean;
  setUserData: (data: any) => void;
  setStatus: (status: AppStatus) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clear: () => void;
}

const useUser = create<UserStore>((set, get) => ({
  userData: {},
  status: AppStatus.Idle,
  isLoggedIn: false,
  setUserData: (data) => set({ userData: data }),
  setStatus: (status) => set({ status }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  clear: () => set({ userData: {}, status: AppStatus.Idle, isLoggedIn: false }),
}));

export { useUser };

// store/useRegisterType.js
import { create } from 'zustand';

const useRegisterType = create((set) => ({
  // Initial state
  registerType: null,
  
  // Action to update the register type
  setRegisterType: (type) => set({ registerType: type })
}));

export default useRegisterType;
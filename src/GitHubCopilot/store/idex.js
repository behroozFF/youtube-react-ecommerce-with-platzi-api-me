import { Password } from '@mui/icons-material';
import { create } from 'zustand'

const useStore = create((set) => ({
  userName: "",
  password: ""
  saveInfo: () => 
    set((userName, password) => ({ 
        userName: userName,
        password: password
    })),
  removeInfo: () => set({ userName:"", password:"" }),
  updateBears: (newBears) => set({ bears: newBears }),
}))


export default useStore;
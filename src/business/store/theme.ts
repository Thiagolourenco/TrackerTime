import {create} from 'zustand';
import { darkTheme, lightTheme } from '../../theme';
import { useColorScheme } from 'react-native';

interface IUseThemeStore {
  isDarkMode: boolean,
  theme: typeof darkTheme | typeof lightTheme;
  toggleTheme: () => void 
}

const useThemeStore = create<IUseThemeStore>((set) => {
  const colorScheme = useColorScheme();

  const initialTheme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return {
    isDarkMode: colorScheme === 'dark',
    theme: initialTheme,
    toggleTheme: () => {
      set((state) => ({
        isDarkMode: !state.isDarkMode,
        theme: state.isDarkMode ? lightTheme : darkTheme,
      }));
    },
  };
});




export default useThemeStore;
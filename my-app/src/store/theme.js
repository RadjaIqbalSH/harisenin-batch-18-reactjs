import { create } from "zustand";

const useThemeStore = create((set) => {
	return {
		// Data
		theme: "light",
		// Actions
		toggleTheme: () => {
			set((state) => {
				return {
					theme: state.theme === "light" ? "dark" : "light",
				};
			});
		},
	};
});

export default useThemeStore;

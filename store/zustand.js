import { create } from "zustand";

const useStore = create((set) => ({
    penColor: 0,
    penWidth: 0,
    penStyle: 0,
    changeColor: (colorIndex) => set({penColor: colorIndex}),
    changeStyle: (styleIndex) => set({penStyle: styleIndex}),
    incWidth: () => set((state) => ({penWidth: state.penWidth + 1})),
    decWidth: () => set((state) => ({penWidth: state.penWidth > 0 ? state.penWidth - 1 : 0})),
}))

export default useStore;
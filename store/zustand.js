import { create } from "zustand";

const useStore = create((set) => ({
    penColor: 0,
    penWidth: 0,
    penStyle: 0,
    changeColor: (colorIndex) => set({penColor: colorIndex}),
    incWidth: () => set((state) => ({penWidth: state.penWidth < 5 ? state.penWidth + 1 : state.penWidth})),
    decWidth: () => set((state) => ({penWidth: state.penWidth > 0 ? state.penWidth - 1 : 0})),
    incStyle: () => set((state) => ({  penStyle: (state.penStyle + 1) % 3})),
    decStyle: () => set((state) => ({  penStyle: (state.penStyle - 1 + 3) % 3})),
}))

export default useStore;
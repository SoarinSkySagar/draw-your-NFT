import { create } from "zustand";

const useStore = create((set) => ({
    penColor: 0,
    penWidth: 5,
    penStyle: 0,
    changeColor: (colorIndex) => set({penColor: colorIndex}),
    incWidth: () => set((state) => ({penWidth: state.penWidth < 50 ? state.penWidth + 5 : state.penWidth})),
    decWidth: () => set((state) => ({penWidth: state.penWidth > 5 ? state.penWidth - 5 : 5})),
    incStyle: () => set((state) => ({  penStyle: (state.penStyle + 1) % 3})),
    decStyle: () => set((state) => ({  penStyle: (state.penStyle - 1 + 3) % 3})),
}))

export default useStore;
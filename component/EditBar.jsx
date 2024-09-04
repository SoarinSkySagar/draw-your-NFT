"use client";

import useStore from "@/store/zustand";

export default function EditBar() {
  const {
    penColor,
    penWidth,
    penStyle,
    changeColor,
    incWidth,
    decWidth,
    changeStyle,
  } = useStore();

  return (
    <div className="bg-yellow-200 rounded-md border-2 border-black p-4 text-xl">
      This is the edit bar
    </div>
  );
}

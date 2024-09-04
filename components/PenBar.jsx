"use client";

import useStore from "@/store/zustand";

const styles = ["Pen", "Brush", "Spray"];
const colors = ["red", "green", "blue"];

export default function PenBar() {
  const {
    penColor,
    penWidth,
    penStyle,
    changeColor,
    incStyle,
    decStyle,
    incWidth,
    decWidth,
  } = useStore();

  return (
    <div className="min-w-max">
      <div className="min-w-48 bg-yellow-200 p-2 m-3 border border-black rounded-lg shadow-xl fixed top-3 left-1/2 transform -translate-x-1/2 z-50 flex divide-x divide-black">
        <div className="p-2 w-1/3 flex flex-row gap-3">
          <div
            className="w-7 h-7 bg-red-500 rounded-md border border-black"
            onClick={() => {
              changeColor(0);
            }}
          ></div>
          <div
            className="w-7 h-7 bg-green-500 rounded-md border border-black"
            onClick={() => {
              changeColor(1);
            }}
          ></div>
          <div
            className="w-7 h-7 bg-blue-500 rounded-md border border-black"
            onClick={() => {
              changeColor(2);
            }}
          ></div>
        </div>
        <div className="p-2 w-1/3 flex flex-row gap-3 items-center">
          <button
            className="w-7 h-7 rounded-md border border-black bg-gray-400 flex items-center justify-center"
            onClick={decWidth}
          >
            -
          </button>
          <p className="text-center">{penWidth}</p>
          <button
            className="w-7 h-7 rounded-md border border-black bg-gray-400 flex items-center justify-center"
            onClick={incWidth}
          >
            +
          </button>
        </div>

        <div className="p-2 w-1/3 flex flex-row gap-3 items-center">
          <button
            className="w-7 h-7 rounded-md border border-black bg-gray-400  flex items-center justify-center"
            onClick={decStyle}
          >
            &lt;
          </button>
          <p className="text-center">{styles[penStyle]}</p>
          <button
            className="w-7 h-7 rounded-md border border-black bg-gray-400  flex items-center justify-center"
            onClick={incStyle}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

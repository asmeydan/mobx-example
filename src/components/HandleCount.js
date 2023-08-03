import React, { useState } from "react";
import { myStore } from "@/pages/_app";
import { observer } from "mobx-react";

const HandleCount = observer((data) => {
  const [input, setInput] = useState(0)

return (
  <div className=" flex flex-col gap-10 w-full items-center">
    <div className=" flex gap-5">
      <button
        className=" px-4 py-2 border border-gray-500 rounded bg-violet-700 text-white"
        onClick={() => myStore.decrement()}
      >
        azalt
      </button>
      <button
        className=" px-4 py-2 border border-gray-500 rounded bg-violet-700 text-white"
        onClick={() => myStore.increment()}
      >
        arttır
      </button>
    </div>
    <div className=" flex flex-col gap-2 md:flex-row md:gap-5">
      <input
        type="number"
        className=" border border-gray-500 rounded h-10 px-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className=" px-4 py-2 border border-gray-500 rounded bg-violet-700 text-white"
        onClick={() => {
          myStore.customValue(input)
          setInput(0);
        }}
      >
        sayıyı ayarla
      </button>
    </div>
  </div>
);
})

export default HandleCount;

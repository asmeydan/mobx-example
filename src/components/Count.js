import React from "react";
import { myStore } from "@/pages/_app";
import { observer } from "mobx-react";

const Count = observer((data) => {

  return (
    <div className=" flex gap-4 text-4xl font-semibold">
      <div className=" font-bold">Sayı: </div>
      <div>{myStore.count}</div>
    </div>
  );
}
)

export default Count;

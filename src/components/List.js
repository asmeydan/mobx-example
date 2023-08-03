import { observer } from "mobx-react";
import React from "react";
import { shoppingListStore } from "@/pages/_app";

const List = observer((data) => {

    return (
      <div className=" flex-1 w-full flex flex-col justify-center items-center">
        <div className=" border border-black rounded-xl overflow-x-hidden overflow-y-auto w-full max-w-sm h-96 flex flex-col justify-start gap-2 p-4 ">
          {
            shoppingListStore.list.map((e, i)=> (
              <div
              key={i}
              className=" flex justify-between items-center rounded bg-gray-100 px-2 py-1"
            >
              <div>- {e}</div>
              <div
                onClick={() => shoppingListStore.deleteElement(e)}
                className=" text-red-600 cursor-pointer font-bold"
              >
                x
              </div>
            </div>
            ))
          }
        </div>
      </div>
    );
  })

export default List;

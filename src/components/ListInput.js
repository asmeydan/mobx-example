import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { shoppingListStore } from '@/pages/_app'

const ListInput = observer((data) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    shoppingListStore.addElement(input)
    setInput("")
  }

    return (
      <form className=' h-9 flex gap-5 w-full justify-center' onSubmit={(e)=> handleSubmit(e)}>
          <input type='text' className=' rounded border border-gray-500 px-4' value={input} onChange={(e)=> setInput(e.target.value)} />
          <button type='submit'  className=" flex justify-center items-center px-4 py-2 border border-gray-500 rounded bg-violet-700 text-white" >ekle </button>
      </form>
    )
  })

export default ListInput
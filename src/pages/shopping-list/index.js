import List from '@/components/List'
import ListInput from '@/components/ListInput'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { shoppingListStore } from '../_app'

const index = observer((data) => {

  useEffect(()=> {
    shoppingListStore.updateList()
  }, [])

    return (
      <div className=' min-h-screen flex flex-col justify-start items-center gap-10 pt-20 px-10 pb-5'>
        <ListInput />
        <p className=' text-2xl font-bold'>Alışveriş Listesi</p>
        <List />
      </div>
    )
  })

export default index
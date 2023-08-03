import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Count from '@/components/Count'
import HandleCount from '@/components/HandleCount'

const index = observer((data) => {

  return (
    <div className=' h-screen flex flex-col justify-center items-center gap-10'>
        <Count />
        <HandleCount />
    </div>
  )
})

export default index
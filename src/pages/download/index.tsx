import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppStore } from '@/store'
import { changeAge } from '@/store/modules/count'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  const dis = useAppDispatch()
  const { age, name } = useAppStore((state) => ({
    age: state.count.age,
    name: state.count.name
  }))

  const change = () => {
    dis(changeAge(24))
  }

  return (
    <div>
      <button onClick={change}>changeAge</button>
      <div>Download</div>
      <div>{age}</div>
      <div>{name}</div>
    </div>
  )
}

export default memo(Download)

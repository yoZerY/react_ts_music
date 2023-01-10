import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  const { age, name } = useSelector((state: any) => ({
    age: state.count.age,
    name: state.count.name
  }))

  return (
    <div>
      <div>Download</div>
      <div>{age}</div>
      <div>{name}</div>
    </div>
  )
}

export default memo(Download)

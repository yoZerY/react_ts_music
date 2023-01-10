import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const toplist: FC<IProps> = () => {
  return <div>toplist</div>
}

export default memo(toplist)

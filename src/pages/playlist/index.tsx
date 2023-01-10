import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const playlist: FC<IProps> = () => {
  return <div>playlist</div>
}

export default memo(playlist)

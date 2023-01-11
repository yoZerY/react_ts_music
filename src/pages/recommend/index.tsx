import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getBanner } from '@/api/discover'

interface IProps {
  children?: ReactNode
}
export interface IBanner {
  imageUrl: string
  titleColor: string
  url: string
  typeTitle: string
}

const recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])

  useEffect(() => {
    getBanner().then((res) => {
      console.log('res', res)
      setBanners(res.banners)
    })
  }, [])

  return (
    <div>
      {banners.map((banner, i) => (
        <img style={{ height: 100 }} key={i} src={banner.imageUrl} />
      ))}
    </div>
  )
}

export default memo(recommend)

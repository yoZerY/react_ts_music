import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/toplist">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
        <Link to="/discover/djradio">主播电台</Link>
      </div>
      <Suspense fallback="loading...">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)

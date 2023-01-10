import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover'))
const Focus = lazy(() => import('@/pages/focus'))
const Download = lazy(() => import('@/pages/download'))
const Mine = lazy(() => import('@/pages/mine'))

const Recommend = lazy(() => import('@/pages/recommend'))
const Toplist = lazy(() => import('@/pages/toplist'))
const Playlist = lazy(() => import('@/pages/playlist'))
const Djradio = lazy(() => import('@/pages/djradio'))
const Artist = lazy(() => import('@/pages/artist'))
const Album = lazy(() => import('@/pages/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes

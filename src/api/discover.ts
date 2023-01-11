import Http from './index'

export const getBanner = () => {
  return Http.get({
    url: '/banner'
  })
}

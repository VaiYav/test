import request from '@/utils/request'

export function fetchData({ query, params }) {
  return request({
    url: query,
    method: 'get',
    params: params
  })
}

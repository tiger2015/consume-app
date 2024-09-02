import request from '@/utils/request'

export function login(params) {
  return request.postForm('/user/login', params)
}

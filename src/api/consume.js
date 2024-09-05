import request from '@/utils/request'

export function listConsume(params) {
  return request.post('/consume/list', params)
}

export function listConsumeType() {
  return request.get('/consumeType/list')
}

export function listPayType() {
  return request.get('/payType/list')
}

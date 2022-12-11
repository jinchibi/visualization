import request from '../utils/request'

export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode: 'JEE71943F518D0E10' }
  })
}

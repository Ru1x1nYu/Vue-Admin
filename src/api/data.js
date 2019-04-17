import axias from 'axios'

export const getTablData = () => {
  return axias.request({
    url: '/getTableData',
    method: 'get'
  })
}

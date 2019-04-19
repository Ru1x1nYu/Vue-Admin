import Mock from 'mockjs'
import { getUserInfo, login, authorization } from './response/user'
import { getTableData } from './response/data'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/authorization/, 'get', authorization)
Mock.setup({
  timeout: 0
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'banana', 'lemon', 'watermelon', 'peach']
    return this.pick(fruit)
  }
})

export default Mock

import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData } from './response/data'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)
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

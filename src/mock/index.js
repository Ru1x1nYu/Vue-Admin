import Mock from 'mockjs'
import { getUserInfo } from './response/user'

const Random=Mock.Random

Mock.mock(/\/getUserInfo/, 'post',getUserInfo)

Mock.setup({
	timeout:0
});

Random.extend({
	fruit(){
		const fruit=['apple','banana','lemon','watermelon','peach']
		return this.pick(fruit)
	}
})

export default Mock

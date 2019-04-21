<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{food}}</p>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">返回上一页</button>
    <button @click="handleClick('replace')">返回上一页</button>
    <button @click="getInfo">请求数据</button>
		<img :src="url" alt=""/>
		<button @click="handlelogout">退出登录</button> -->
		<Row>
			<i-col>{{rules}}</i-col>
		</Row>
		<Row :gutter="10">
			<i-col span="12"></i-col>
			<i-col span="12"></i-col>
		</Row>
		<Row :gutter="10">
			<i-col span="8"></i-col>
			<i-col span="8"></i-col>
			<i-col span="8"></i-col>
		</Row>
		<Row :gutter="10">
			<i-col span="6"></i-col>
			<i-col span="6"></i-col>
			<i-col span="6"></i-col>
			<i-col span="6"></i-col>
		</Row>
			<Row :gutter="10" class="blue">
			<i-col :sm="8"></i-col>
			<i-col :sm="8"></i-col>
			<i-col :sm="8"></i-col>
		</Row>
		<Button :disabled='!rules.edit_button'>编辑</Button>
		<Button :disabled='!rules.publish_button'>发布</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import { getUserInfo } from "@/api/user"
import {mapActions, mapState} from 'vuex'

export default {
	name: "home",
	data(){
		return{
			url:''
		}
	},
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "nice"
    }
	},
	computed:{
		...mapState('user',{
			rules: state=>state.rules
		})
	},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  // beforeRouteLeave (to, from, next) {
  // 	const leave=confirm('您确定要离开吗?')
  // 	if(leave){
  // 		next()
  // 	}else{
  // 		next(false)
  // 	}
  // },
  methods: {
		...mapActions('user',[
			'logout'
		]),
    handleClick(type) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        this.$router.push({
          name: "argu",
          params: {
            name: "小余	"
          }
        });
      } else if (type === "replace") {
        this.$router.replace("parent");
      }
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
				console.log("res", res.data);
				this.url=res.data.img
      });
		},
		handlelogout(){
			this.logout()
			this.$router.push({
				name:'login'
			})
		}
  }
};
</script>

<style lang="scss" scoped>
.home{
	.ivu-col{
		height: 50px;
		margin-top:10px;
		background: pink;
		background-clip: content-box;
	}
	.blue{
		.ivu-col{
			background-color: paleturquoise;
			background-clip: content-box;

		}
	}
}
</style>

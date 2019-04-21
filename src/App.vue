<template>
  <div id="app">
    <!-- <div id="ndedav">
      <router-link to="/home_page">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link>
    </div> -->
		<transition-group :name="routerTransition" mode="out-in" tag="div" class="transition-group-wrapper">
		<router-view key="default"/>
    <!-- <router-view key="tel" name="tel"/>
    <router-view key="email" name="email"/> -->
		</transition-group>

  </div>
</template>

<script>
export default {
	data () {
		return {
			routerTransition :''
		}
	},
	watch:{
		//为某个页面设定特定的动画用该方法
		'$route' (to){
			console.log(to.query);
			to.query&& to.query.transitionName &&(this.routerTransition=to.query.transitionName)
		}
	}
}
</script>

<style lang="scss">
html,body{
	height: 100%;
}
.transition-group-wrapper{
	height: 100%;
}
body{
	margin: 0;
	padding: 0
}
.router-enter{
	opacity: 0;
}
.router-enter-active{
	transition: opacity 1s ease;
}
.router-enter-to{
	opacity: 1;
}
.router-leave{
	opacity: 1;
}
.router-leave-active{
	transition: opacity 1s ease;
}
.router-leave-to{
	opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
	height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@font-face {
	font-family: 'iconfont';
	src: url('./assets/fonts/iconfont.eot');
	src: url('./assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
	url('./assets/fonts/iconfont.woff') format('woff'),
	url('./assets/fonts/iconfont.ttf') format('truetype'),
	url('./assets/fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;
		font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.iconfont-svg {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
}
</style>

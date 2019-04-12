const path =require('path')
const resolve=dir=>{
	return path.join(__dirname,dir)
}

const BASE_URL=process.env.NODE_ENV==='procution'?'/Vue-Admin/':'/'



module.exports = {
	lintOnSave: false,
	baseUrl: BASE_URL,
	chainWebpack:config=>{
		config.resolve.alias
		.set('@',resolve('src'))
		.set('_C',resolve('src/components'))
	},
	//打包时不生成.map文件
	productionSourceMap: false,
	devServer:{
		proxy:'http://localhost:4001'
	}
}

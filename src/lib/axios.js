import axios from 'axios'
import{ BASEURL } from '@/config'
class HttpRequest{
	constructor(baseUrl=BASEURL){
		this.baseUrl=baseUrl
		this.queue={}
	}
	//

	getInsideConfig(){
		const config={
			baseURL:this.baseUrl,
			headers:{
				//
			}
		}
		return config
	}

	interceptors(instance,url){
		instance.interceptors.request.use(config=>{
			//添加全局的loading
			//Spin能够在整个页面设置一个loading...无法操作
			if(!Object.keys(this.queue).length){
				// Spin.show()
			}
			this.queue[url]=true
			return config
		},error=>{
			return Promise.reject(error)
		})
		//响应的拦截
		instance.interceptors.response.use(res=>{
			delete this.queue[url]
			const { data,status }=res
			return { data,status }
		},error=>{
			delete this.queue[url]
			return Promise.reject(error)
		})
	}
	request (options) {
		//axios创建实例
    const instance = axios.create()
		//assign合并到一个对象，相同配置的话使用后面options的属性
    options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
    return instance(options)
  }
}


export default HttpRequest
